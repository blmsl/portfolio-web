package kiwi.ouq77.portfolio.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class WelcomeController {

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String getIndex(final Model model) {

		final List<Integer> randomFilenames = new ArrayList<Integer>(75);
		final Random random = new Random();
		final int low = 1;
		final int high = 130;
		while (randomFilenames.size() < 76) {
			int randomFilename = random.nextInt(high - low) + low;
			if (!randomFilenames.contains(randomFilename)) {
				randomFilenames.add(randomFilename);
			}
		}

		model.addAttribute("randomFilenames", randomFilenames);

		return "index";
	}
}
