import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the CountryComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function CountryComponent(manifest: Manifest) {
  manifest.addComponent({
    name: 'CountryComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
    ],
  });
}
