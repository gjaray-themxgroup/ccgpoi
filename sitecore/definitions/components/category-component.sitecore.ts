import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the CategoryComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function CategoryComponent(manifest: Manifest) {
  manifest.addComponent({
    name: 'CategoryComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'state', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
