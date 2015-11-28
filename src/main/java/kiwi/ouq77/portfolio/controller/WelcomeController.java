package kiwi.ouq77.portfolio.controller;

import java.util.*;

import kiwi.ouq77.portfolio.launch.Launch;

import org.springframework.http.ResponseEntity;
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
	@RequestMapping(value = "/", method = RequestMethod.GET, produces = "text/html; charset=UTF-8")
	public String getIndex(final Model model) {

		return "index";
	}

	@RequestMapping(value = "/imageids", method = RequestMethod.GET, produces = "application/json; charset=UTF-8")
	public ResponseEntity<Map<String, List<String>>> getRandomImageIds() {

		final List<String> randomImageIds = new ArrayList<>(64);
		final Random random = new Random();
		final int idCount = Launch.INSTAGRAM_IMAGE_IDS.size();
		final int maxImages = idCount >= 64 ? 64 : idCount;
		while (randomImageIds.size() < maxImages) {
			final String randomImageId = Launch.INSTAGRAM_IMAGE_IDS.get(random.nextInt(idCount));
			if (!randomImageIds.contains(randomImageId)) {
				randomImageIds.add(randomImageId);
			}
		}

        final Map<String, List<String>> randomImageIdsMap = new HashMap<>();
        randomImageIdsMap.put("randomImageIds", randomImageIds);
		return ResponseEntity.ok(randomImageIdsMap);
	}
}
