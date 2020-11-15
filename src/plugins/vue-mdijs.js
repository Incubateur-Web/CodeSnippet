import Vue from 'vue';
import VMdijs from 'vue-mdijs';
import {
  mdiFolderOutline,
  mdiPlus,
  mdiMagnify,
  mdiChevronDown,
  mdiStarOutline,
  mdiStar,
  mdiDeleteOutline,
  mdiArchiveOutline,
  mdiClose,
  mdiLabelOutline,
  mdiFile,
  mdiMoonWaningCrescent,
  mdiDotsHorizontal,
  mdiPencil,
  mdiMenu,
  mdiAccountPlus,
  mdiAccountKey,
  mdiGithub,
  mdiEye,
  mdiEyeOff,
} from '@mdi/js';

VMdijs.add({
  mdiFolderOutline,
  mdiPlus,
  mdiMagnify,
  mdiChevronDown,
  mdiStarOutline,
  mdiStar,
  mdiDeleteOutline,
  mdiArchiveOutline,
  mdiClose,
  mdiLabelOutline,
  mdiFile,
  mdiMoonWaningCrescent,
  mdiDotsHorizontal,
  mdiPencil,
  mdiMenu,
  mdiAccountPlus,
  mdiAccountKey,
  mdiGithub,
  mdiEye,
  mdiEyeOff,
});

Vue.use(VMdijs);
