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
// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import ScoresActions from "../redux/actions/ScoresActions";
import QualitiesActions from "../redux/actions/QualitiesActions";
import InterestsActions from "../redux/actions/InterestsActions";

// END IMPORT ACTIONS

/** APIs

* actionsScores.create
*	@description CRUD ACTION create
*
* actionsScores.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id 
*
* actionsQualities.list
*	@description CRUD ACTION list
*
* actionsInterests.list
*	@description CRUD ACTION list
*
* actionsUser.list
*	@description CRUD ACTION list
*
* actionsScores.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class ScoresEdit extends Component {
  // Init scores
  constructor(props) {
    super(props);
    this.state = {
      scores: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsScores.loadScores(this.props.match.params.id);
    }
    
    this.props.actionsInterests.loadInterestsList();
    this.props.actionsQualities.loadQualitiesList();
    this.props.actionsUser.loadUserList();
  }

  // Insert props scores in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      scores: props.scores
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.scores._id) {
      this.props.actionsScores.saveScores(this.state.scores).then(data => {
        this.props.history.push("/scoreses/");
      });
    } else {
      this.props.actionsScores.createScores(this.state.scores).then(data => {
        this.props.history.push("/scoreses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Scores Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m Interest with Interests */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="Interest">Interest</InputLabel>
            <Select
              multiple
              value={this.state.scores.Interest || []}
              onChange={Utils.handleChangeSelect.bind(this, "scores")}
              input={<Input id="Interest" name="Interest" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listInterests && this.props.listInterests.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.scores.Interest &&
                      this.state.scores.Interest.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation m:m Quality with Qualities */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="Quality">Quality</InputLabel>
            <Select
              multiple
              value={this.state.scores.Quality || []}
              onChange={Utils.handleChangeSelect.bind(this, "scores")}
              input={<Input id="Quality" name="Quality" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listQualities && this.props.listQualities.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.scores.Quality &&
                      this.state.scores.Quality.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation 1:m User with User */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="User">
              User
            </InputLabel>
            <Select
              value={this.state.scores.User || ""}
              onChange={Utils.handleChangeSelect.bind(this, "scores")}
              inputProps={{
                id: "User",
                name: "User"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUser && this.props.listUser.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/scoreses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsScores: bindActionCreators(ScoresActions, dispatch),
    actionsQualities: bindActionCreators(QualitiesActions, dispatch),
    actionsInterests: bindActionCreators(InterestsActions, dispatch),
  };
};

// Validate types
ScoresEdit.propTypes = { 
  actionsScores: PropTypes.object.isRequired,
  actionsQualities: PropTypes.object.isRequired,
  actionsInterests: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    scores: state.ScoresEditReducer.scores,
    listInterests: state.ScoresEditReducer.listInterests,
    listQualities: state.ScoresEditReducer.listQualities,
    listUser: state.ScoresEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoresEdit);
