package kiwi.ouq77.portfolio.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import kiwi.ouq77.portfolio.launch.Launch;

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

		final List<String> randomFilenames = new ArrayList<>(64);
		final Random random = new Random();
		final int idCount = Launch.INSTAGRAM_IMAGE_IDS.size();
		final int maxImages = idCount >= 64 ? 64 : idCount;
		while (randomFilenames.size() < maxImages) {
			final String randomImageId = Launch.INSTAGRAM_IMAGE_IDS.get(random.nextInt(idCount));
			if (!randomFilenames.contains(randomImageId)) {
				randomFilenames.add(randomImageId);
			}
		}

		model.addAttribute("randomImageIds", randomFilenames);

		return "index";
	}
}
