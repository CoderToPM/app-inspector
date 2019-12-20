import pkg from '../../package.json';
import './app-info.less';

export default () => (
  <div className="app-info">
    <span>v{ pkg.version }</span>
    <span>
      &copy; 2019-{ (new Date).getFullYear() } <a href="//github.com/CoderToPM/app-inspector" target="_blank">CoderToPM</a>
    </span>
    <strong>
      <a className="fn-right" target="_blank" style={{color: '#f60'}} href="//github.com/CoderToPM/app-inspector/issues/new">
        Need help?
      </a>
    </strong>
  </div>
);
