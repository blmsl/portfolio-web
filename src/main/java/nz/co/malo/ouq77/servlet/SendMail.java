package nz.co.malo.ouq77.servlet;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.Message.RecipientType;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.validator.routines.EmailValidator;

import com.sun.mail.util.MailSSLSocketFactory;

@WebServlet(name = "SendMail", urlPatterns = { "/send" })
public class SendMail extends HttpServlet {

	private static final long serialVersionUID = 1L;
	private static final String JAVA_MAIL_EMAIL = "$JAVA_MAIL_EMAIL";
	private static final String JAVA_MAIL_PASSWORD = "$JAVA_MAIL_PASSWORD";
	private static final String SUBJECT = "Message from %s | ouq77.horokuapp.com";
	private static final String CONTENT = "You have been contacted by %s. Their additional message is as follows:\n\n%s";
	private static final String CONTENT_COPY = "I've received your message.\n\nHere is a copy of what you sent:\n\n%s\n%s\n%s";
	private static final String SPAM = "<<div class=\"error_message\">Spam filter has been triggered.</div>";
	private static final String NAME_REQUIRED = "<div class=\"error_message\">Please enter your name.</div>";
	private static final String EMAIL_REQUIRED = "<div class=\"error_message\">Please enter a valid email address.</div>";
	private static final String EMAIL_INVALID = "<div class=\"error_message\">You have entered an invalid e-mail address. Please try again.</div>";
	private static final String MESSAGE_REQUIRED = "<div class=\"error_message\">Please enter your message.</div>";
	private static final String SUCCESS = "<div id=\"success_page\"><h3>Email Sent Successfully.</h3><p>Thank you <strong>%s</strong>, your message has been sent.</p></div></fieldset>";
	private static final String ERROR = "<div class=\"error_message\">Something unexpected happend. Please try again late...</div>";

	@Override
	protected void doPost(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {
		final String heuning = req.getParameter("heuning");
		final String name = req.getParameter("name");
		final String email = req.getParameter("email");
		final String comments = req.getParameter("comments");

		final StringBuilder responseBuilder = new StringBuilder();
		if (StringUtils.isNotEmpty(heuning)) {
			responseBuilder.append(SPAM);
		}

		if (responseBuilder.length() == 0) {
			if (StringUtils.isEmpty(name)) {
				responseBuilder.append(NAME_REQUIRED);
			}
		}
		if (responseBuilder.length() == 0) {
			if (StringUtils.isEmpty(email)) {
				responseBuilder.append(EMAIL_REQUIRED);
			} else if (!EmailValidator.getInstance().isValid(email)) {
				responseBuilder.append(EMAIL_INVALID);
			}
		}
		if (responseBuilder.length() == 0) {
			if (StringUtils.isEmpty(comments)) {
				responseBuilder.append(MESSAGE_REQUIRED);
			}
		}

		if (responseBuilder.length() == 0) {
			try {
				responseBuilder.append(send(name, email, comments));
			} catch (final GeneralSecurityException e) {
				// Heroku logging
				System.err.println(e);
				responseBuilder.append(ERROR);
			}
		}

		resp.setContentType("text/html");
		final ServletOutputStream out = resp.getOutputStream();
		out.write(responseBuilder.toString().getBytes());
		out.flush();
		out.close();
	}

	private String send(final String fromName, final String fromEmail, final String comments) throws GeneralSecurityException {

		final Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "465");

		final MailSSLSocketFactory sf = new MailSSLSocketFactory();
		sf.setTrustedHosts(new String[] { "localhost", "ouq77.horokuapp.com" });
		props.put("mail.smtp.ssl.socketFactory", sf);

		props.put("mail.smtp.ssl.enable", "true");
		props.put("mail.smtp.auth", "true");

		final Authenticator auth = new Authenticator() {
			public PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(System.getenv(JAVA_MAIL_EMAIL), System.getenv(JAVA_MAIL_PASSWORD));
			}
		};

		final Session mailSession = Session.getInstance(props, auth);

		final Message simpleMessage = new MimeMessage(mailSession);
		InternetAddress fromAddress = null;
		InternetAddress toAddress = null;
		try {
			fromAddress = new InternetAddress(fromEmail);
			toAddress = new InternetAddress(System.getenv(JAVA_MAIL_EMAIL));
		} catch (AddressException e) {
			e.printStackTrace();
		}

		// Send my copy
		try {
			simpleMessage.setFrom(fromAddress);
			simpleMessage.setRecipient(RecipientType.TO, toAddress);
			simpleMessage.setSubject(String.format(SUBJECT, fromName));
			simpleMessage.setText(String.format(CONTENT, fromName, comments));
			Transport.send(simpleMessage);
		} catch (final MessagingException e) {
			// Heroku logging
			System.err.println(e);
			return ERROR;
		}

		// Send user copy
		try {
			simpleMessage.setFrom(toAddress);
			simpleMessage.setRecipient(RecipientType.TO, fromAddress);
			simpleMessage.setSubject(String.format(SUBJECT, "Louw Swart"));
			simpleMessage.setText(String.format(CONTENT_COPY, fromName, fromEmail, comments));
			Transport.send(simpleMessage);
		} catch (final MessagingException e) {
			// Heroku logging
			System.err.println(e);
			return ERROR;
		}

		return String.format(SUCCESS, fromName);
	}
}
