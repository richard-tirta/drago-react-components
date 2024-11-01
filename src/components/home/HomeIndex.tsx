

const HomeIndex = () => {

  return (
    <>
      <h1>Drago's React Component System</h1>
      <p>
        This is a React Component system made by <a href="https://richardtirta.com">Richard Tirta</a>. The idea of the creation of this system is:
        <ul>
          <li>
            To create a reusable components for Richard's future project since he found himself kept remaking components from scratch. Preventing him to build on bigger more complex projects.
          </li>
          <li>
            Yes, there's MUI. But this is for him to learn how to use and practice better React.
          </li>
          <li>
            To simulate the kind of works he did at his job at Meta. In Meta he would create a reusable component for the in-house CMS system.
          </li>
          <li><em>This one is better though since it's purely in React and not in Hack[PHP] :p</em>. Eg: It has automated unit testing to prevent breaks for future modifications and integrations</li>
          <li>
            Implementation is intended to be in frameworks such as Next.js where we assume there will be some native components such as Image and Link. Or others more Web App utilizing Express or Vite.
          </li>
          <li>
            For Next.js though there's some caveats:
            <ul>
              <li>Currently we have HTML anchor and img tags that will need to be updated.</li>
              <li>
                Build is assuming that we need to watch out from hydration error, that means avoiding useEffect that can cause hydration error. But this is not tested yet (todo: create test to check for possible hydration error). There are some component that we probably need to bypass since they're not necessary required for SEO (like Consent or Notification).
              </li>
            </ul>
          </li>
        </ul>
      </p>
      <h3>
        To do:
      </h3>
      <ul>
        <li>
          <p>
            10/30/2024: Some attributes documentation still need to be updated. But kinda pushing them back since everytime I'm working new components seems once in a while I need to add more attributes for some tier 1 components such as Input, Button and Modal.
          </p>
        </li>
        <li>
          <p>
            10/30/2024: Need to update Nav since it's currently ugly.
          </p>
        </li>
      </ul>

    </>
  )
}

export default HomeIndex
