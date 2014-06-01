package kiwi.ouq77.portfolio.servlet;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.mail.Address;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Message.RecipientType;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kiwi.ouq77.portfolio.launch.Main;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.commons.validator.routines.EmailValidator;

import com.sun.mail.util.MailSSLSocketFactory;

@WebServlet(name = "sendMail", urlPatterns = { "/send" })
public class SendMail extends HttpServlet {

	private static final long serialVersionUID = 1L;
	private static final Log log = LogFactory.getLog(Main.class);
	/**
	 * HEROKU CONFIG VARIABLES
	 */
	private static final String OWNER_NAME = System.getenv("OWNER_NAME");
	private static final String JAVA_MAIL_EMAIL = System.getenv("JAVA_MAIL_EMAIL");
	private static final String JAVA_MAIL_PASSWORD = System.getenv("JAVA_MAIL_PASSWORD");
	/**
	 * END HEROKU CONFIG VARIABLES
	 */
	private static final Pattern ILLEGAL_CHARS_PATTERN = Pattern.compile("[<>^|%()&+]");
	private static final Pattern URL_PATTERN = Pattern.compile("http[s]?");
	private static final String INPUT_HONEY_POT = "heuning";
	private static final String INPUT_NAME = "name";
	private static final String INPUT_EMAIL = "email";
	private static final String INPUT_MESSAGE = "message";
	private static final String SUBJECT = "Message from %s | " + Main.CUSTOM_APP_DOMAIN;
	private static final String CONTENT = "You have been contacted by %s (%s). Their additional message is as follows:\n\n%s";
	private static final String CONTENT_COPY = "Thank you for getting in touch - I've received your message.\n\nHere is a copy of what you sent:\n\n%s (%s)\n\n%s";
	private static final String MESSAGE_DIV = "<div class=\"%s\">%s</div>";
	private static final String ERROR_CLASS = "error_message";
	private static final String SUCCESS_CLASS = "success_message";
	private static final String BR = "<br/>";
	private static final String SPAM = "Spam filter has been triggered";
	private static final String FIELD_REQUIRED = "Please enter your ";
	private static final String EMAIL_INVALID = "You have entered an invalid email";
	private static final String CONTAINS_ILLEGAL_CHARS = " contains one or more illegal characters: <i>< > ^ | \" ' % ; ) ( & + -</i>";
	private static final String CONTAINS_URL = " does not allow URLs";
	private static final String UNKNOWN_ERROR = "Something unexpected happend - please try again later...";
	private static final String SUCCESS = "<h3>Email Sent Successfully.</h3><p>Thank you <strong>%s</strong>, your message has been sent.</p>";

	@Override
	protected void doPost(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {
		final String heuning = req.getParameter(INPUT_HONEY_POT);
		final String name = req.getParameter(INPUT_NAME);
		final String email = req.getParameter(INPUT_EMAIL);
		final String message = req.getParameter(INPUT_MESSAGE);

		final StringBuilder responseBuilder = new StringBuilder();
		if (StringUtils.isNotEmpty(heuning)) {
			responseBuilder.append(SPAM);
		}

		validateInput(responseBuilder, INPUT_NAME, name);
		validateInput(responseBuilder, INPUT_EMAIL, email);
		validateInput(responseBuilder, INPUT_MESSAGE, message);

		if (responseBuilder.length() == 0) {
			try {
				responseBuilder.append(send(name, email, message));
			} catch (final GeneralSecurityException e) {
				log.error(e);
				responseBuilder.append(UNKNOWN_ERROR);
			} catch (final Exception e) {
				log.error(e);
				responseBuilder.append(UNKNOWN_ERROR);
			}
		}

		final String response = String.format(MESSAGE_DIV, responseBuilder.toString().equals(String.format(SUCCESS, name)) ? SUCCESS_CLASS : ERROR_CLASS, responseBuilder.toString());

		resp.setContentType("text/html");
		final ServletOutputStream out = resp.getOutputStream();
		out.write(response.getBytes());
		out.flush();
		out.close();
	}

	private String send(final String fromName, final String fromEmail, final String message) throws GeneralSecurityException {

		final Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "465");

		final MailSSLSocketFactory sf = new MailSSLSocketFactory();
		sf.setTrustedHosts(new String[] { "localhost", Main.HEROKU_APP_DOMAIN, Main.CUSTOM_APP_DOMAIN });
		props.put("mail.smtp.ssl.socketFactory", sf);

		props.put("mail.smtp.ssl.enable", "true");
		props.put("mail.smtp.auth", "true");

		final Authenticator auth = new Authenticator() {
			@Override
			public PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(JAVA_MAIL_EMAIL, JAVA_MAIL_PASSWORD);
			}
		};

		final Session mailSession = Session.getInstance(props, auth);

		final Message simpleMessage = new MimeMessage(mailSession);
		InternetAddress fromAddress = null;
		InternetAddress toAddress = null;
		try {
			fromAddress = new InternetAddress(fromEmail, fromName);
			toAddress = new InternetAddress(JAVA_MAIL_EMAIL, OWNER_NAME);
		} catch (final UnsupportedEncodingException e) {
			log.error(e);
			return UNKNOWN_ERROR;
		}

		// Send my copy
		try {
			simpleMessage.setFrom(fromAddress);
			simpleMessage.setReplyTo(new Address[] { fromAddress });
			simpleMessage.setRecipient(RecipientType.TO, toAddress);
			simpleMessage.setSubject(String.format(SUBJECT, fromName));
			simpleMessage.setText(String.format(CONTENT, fromName, fromEmail, message));
			Transport.send(simpleMessage);
		} catch (final MessagingException e) {
			log.error(e);
			return UNKNOWN_ERROR;
		}

		// Send user copy
		try {
			simpleMessage.setFrom(toAddress);
			simpleMessage.setRecipient(RecipientType.TO, fromAddress);
			simpleMessage.setSubject(String.format(SUBJECT, OWNER_NAME));
			simpleMessage.setText(String.format(CONTENT_COPY, fromName, fromEmail, message));
			Transport.send(simpleMessage);
		} catch (final MessagingException e) {
			log.error(e);
			return UNKNOWN_ERROR;
		}

		return String.format(SUCCESS, fromName);
	}

	private void validateInput(final StringBuilder responseBuilder, final String field, final String input) {
		if (responseBuilder.length() != 0) {
			responseBuilder.append(BR);
		}

		if (StringUtils.isEmpty(input)) {
			responseBuilder.append(FIELD_REQUIRED).append(field);
		} else {
			if (INPUT_NAME.equals(field) || INPUT_MESSAGE.equals(field)) {
				if (invalidInput(input)) {
					responseBuilder.append(StringUtils.capitalize(field)).append(CONTAINS_ILLEGAL_CHARS);
				} else if (containsUrl(input)) {
					responseBuilder.append(StringUtils.capitalize(field)).append(CONTAINS_URL);
				}
			}

			if (INPUT_EMAIL.equals(field) && !EmailValidator.getInstance().isValid(input)) {
				responseBuilder.append(EMAIL_INVALID);
			}
		}
	}

	private boolean invalidInput(final String input) {
		final Matcher matcher = ILLEGAL_CHARS_PATTERN.matcher(input);
		return matcher.find();
	}

	private boolean containsUrl(final String input) {
		final Matcher matcher = URL_PATTERN.matcher(input);
		return matcher.find();
	}
}
