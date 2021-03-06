import * as React from "react";
import { options } from "../App";
interface props {
  options: options;
  updateOptions: Function;
}

interface state {}

class Configuration extends React.Component<props, state> {
  public constructor(props: props) {
    super(props);
    this.state = {};
  }

  public setTarget = (e: any) => {
    const newOptions: options = this.props.options;
    newOptions.target_new_tabs = e.target.checked;
    this.props.updateOptions(newOptions);
  };

  public setGitHubTrendingInterval = (e: any) => {
    const newOptions: options = this.props.options;
    newOptions.github_trending = e.target.value;
    this.props.updateOptions(newOptions);
  };

  public setRedditMulti = (e: any) => {
    this.props.updateOptions({
      ...this.props.options,
      reddit_multi: e.target.value
    });
  };

  public render() {
    return (
      <div className="configuration">
        <label htmlFor="target">Open in new tabs:</label>
        <input
          type="checkbox"
          id="target"
          checked={this.props.options.target_new_tabs}
          onChange={this.setTarget}
        />
        <br />
        <label htmlFor="githubinterval">GitHub Trending Interval:</label>
        <select
          id="githubinterval"
          onChange={this.setGitHubTrendingInterval}
          value={this.props.options.github_trending}
        >
          <option value="daily">today</option>
          <option value="weekly">weekly</option>
          <option value="monthly">monthly</option>
        </select>
        <br />
        <label htmlFor="reddit">
          Subreddits to display (blank for "best"):
        </label>
        <input
          type="text"
          id="reddit"
          value={this.props.options.reddit_multi}
          onChange={this.setRedditMulti}
        />
        <br />
      </div>
    );
  }
}

export default Configuration;
