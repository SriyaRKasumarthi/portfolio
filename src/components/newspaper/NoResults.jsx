import Rule from './Rule';

export default function NoResults({ query, category, onClear }) {
  return (
    <div className="no-results">
      <div className="nr-frame">
        <div className="nr-stamp">CLASSIFIEDS</div>
        <Rule kind="fancy" />
        <h3 className="nr-title">An Editorial Note</h3>
        <p className="nr-body">
          We regret to inform our readers that no stories were found
          {category !== 'All' && (
            <>
              {' '}
              within <em>{category}</em>
            </>
          )}
          {query && (
            <>
              {' '}
              matching <em>&quot;{query}&quot;</em>
            </>
          )}
          . The archive is deep but not infinite; perhaps try a broader query.
        </p>
        <button type="button" className="nr-button" onClick={onClear}>
          Reset the Page
        </button>
      </div>
    </div>
  );
}
