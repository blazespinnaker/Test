/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d44e33ca046842f16aa4050
*
* You will get 10% discount for each one of your friends
* 
*/
package com.test.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.bson.types.ObjectId;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.test.db.test_db.service.ScoresService;
import com.test.db.test_db.entity.Scores;

//IMPORT RELATIONS
import com.test.db.test_db.entity.Interests;
import com.test.db.test_db.entity.Qualities;
import com.test.db.test_db.entity.User;

public class ScoresBaseController {
    
    @Autowired
	ScoresService scoresService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/scores",method = RequestMethod.POST, headers = "Accept=application/json")
	public Scores insert(@RequestBody Scores obj) {
		 return scoresService.insert(obj);
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/scores/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") String id) {
		scoresService.delete(id);
	}
	

    //CRUD - FIND BY Interest
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/scores/findByInterest/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Scores> findByInterest(@PathVariable("key") String idInterest) {
		return scoresService.findByInterest(idInterest);
	}

    //CRUD - FIND BY Quality
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/scores/findByQuality/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Scores> findByQuality(@PathVariable("key") String idQuality) {
		return scoresService.findByQuality(idQuality);
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/scores/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Scores get(@PathVariable String id) {
		return scoresService.get(id);
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/scores", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Scores> getList() {
		return scoresService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/scores/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Scores update(@RequestBody Scores obj) {
		return scoresService.update(obj);
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
