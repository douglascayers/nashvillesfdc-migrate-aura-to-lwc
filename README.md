## Migrating Aura Components to Lightning Web Components

This is the sample code used in the demo at the meetup, https://sfdc.co/aura2lwc-nash19.

This repository includes two Lightning components, one developed with the [Aura programming model](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm) and one with the [Lightning Web  Components programming model](https://developer.salesforce.com/docs/component-library/documentation/lwc).
The two components implement the same behavior so you can see how the functionality maps between the two programming models.

## Deploy the Code

1. Set up your Salesforce DX environment by completing the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components?trail_id=build-lightning-web-components) project.

2. Clone this repository

```
git clone https://github.com/douglascayers/nashvillesfdc-migrate-aura-to-lwc.git
```

3. Create a scratch org from a Dev Hub org that is on [Spring '19](https://releasenotes.docs.salesforce.com/en-us/spring19/release-notes/rn_lwc.htm) or later major release. You sign up for a Dev Hub org in the Quick Start project mentioned above.

```
sfdx force:org:create -a aura2lwc -s -f config/project-scratch-def.json
```

4. Push source to your scratch org.

```
sfdx force:source:push
```

5. Open the scratch org and navigate to the Accounts tab.

```
sfdx force:org:open --path //lightning/o/Account/list
```

6. Create an account record then edit the record page to add the **Hello, Aura** and/or **Hello, LWC** components to the page, then enjoy!

## Next Steps

* Explore [Trailhead and Sample Code](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.install_sample_code_repo)
* Read [Working with Aura and Lightning Web Components: Interoperability and Migration](https://developer.salesforce.com/blogs/2019/02/working-with-aura-and-lightning-web-components-interoperability-and-migration.html)
* Watch [Lightning Web Components Video Gallery](https://developer.salesforce.com/tv/lwc-video-gallery)