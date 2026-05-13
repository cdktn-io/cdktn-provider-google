/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RecaptchaEnterpriseKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Human-readable display name of this key. Modifiable by user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#display_name RecaptchaEnterpriseKey#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field `effective_labels` for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#labels RecaptchaEnterpriseKey#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#project RecaptchaEnterpriseKey#project}
  */
  readonly project?: string;
  /**
  * android_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#android_settings RecaptchaEnterpriseKey#android_settings}
  */
  readonly androidSettings?: RecaptchaEnterpriseKeyAndroidSettings;
  /**
  * ios_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#ios_settings RecaptchaEnterpriseKey#ios_settings}
  */
  readonly iosSettings?: RecaptchaEnterpriseKeyIosSettings;
  /**
  * testing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#testing_options RecaptchaEnterpriseKey#testing_options}
  */
  readonly testingOptions?: RecaptchaEnterpriseKeyTestingOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#timeouts RecaptchaEnterpriseKey#timeouts}
  */
  readonly timeouts?: RecaptchaEnterpriseKeyTimeouts;
  /**
  * waf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#waf_settings RecaptchaEnterpriseKey#waf_settings}
  */
  readonly wafSettings?: RecaptchaEnterpriseKeyWafSettings;
  /**
  * web_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#web_settings RecaptchaEnterpriseKey#web_settings}
  */
  readonly webSettings?: RecaptchaEnterpriseKeyWebSettings;
}
export interface RecaptchaEnterpriseKeyAndroidSettings {
  /**
  * If set to true, it means allowed_package_names will not be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#allow_all_package_names RecaptchaEnterpriseKey#allow_all_package_names}
  */
  readonly allowAllPackageNames?: boolean | cdktn.IResolvable;
  /**
  * Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#allowed_package_names RecaptchaEnterpriseKey#allowed_package_names}
  */
  readonly allowedPackageNames?: string[];
}

export function recaptchaEnterpriseKeyAndroidSettingsToTerraform(struct?: RecaptchaEnterpriseKeyAndroidSettingsOutputReference | RecaptchaEnterpriseKeyAndroidSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_package_names: cdktn.booleanToTerraform(struct!.allowAllPackageNames),
    allowed_package_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedPackageNames),
  }
}


export function recaptchaEnterpriseKeyAndroidSettingsToHclTerraform(struct?: RecaptchaEnterpriseKeyAndroidSettingsOutputReference | RecaptchaEnterpriseKeyAndroidSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all_package_names: {
      value: cdktn.booleanToHclTerraform(struct!.allowAllPackageNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_package_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedPackageNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecaptchaEnterpriseKeyAndroidSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyAndroidSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllPackageNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllPackageNames = this._allowAllPackageNames;
    }
    if (this._allowedPackageNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPackageNames = this._allowedPackageNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyAndroidSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAllPackageNames = undefined;
      this._allowedPackageNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAllPackageNames = value.allowAllPackageNames;
      this._allowedPackageNames = value.allowedPackageNames;
    }
  }

  // allow_all_package_names - computed: false, optional: true, required: false
  private _allowAllPackageNames?: boolean | cdktn.IResolvable; 
  public get allowAllPackageNames() {
    return this.getBooleanAttribute('allow_all_package_names');
  }
  public set allowAllPackageNames(value: boolean | cdktn.IResolvable) {
    this._allowAllPackageNames = value;
  }
  public resetAllowAllPackageNames() {
    this._allowAllPackageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllPackageNamesInput() {
    return this._allowAllPackageNames;
  }

  // allowed_package_names - computed: false, optional: true, required: false
  private _allowedPackageNames?: string[]; 
  public get allowedPackageNames() {
    return this.getListAttribute('allowed_package_names');
  }
  public set allowedPackageNames(value: string[]) {
    this._allowedPackageNames = value;
  }
  public resetAllowedPackageNames() {
    this._allowedPackageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPackageNamesInput() {
    return this._allowedPackageNames;
  }
}
export interface RecaptchaEnterpriseKeyIosSettings {
  /**
  * If set to true, it means allowed_bundle_ids will not be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#allow_all_bundle_ids RecaptchaEnterpriseKey#allow_all_bundle_ids}
  */
  readonly allowAllBundleIds?: boolean | cdktn.IResolvable;
  /**
  * iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#allowed_bundle_ids RecaptchaEnterpriseKey#allowed_bundle_ids}
  */
  readonly allowedBundleIds?: string[];
}

export function recaptchaEnterpriseKeyIosSettingsToTerraform(struct?: RecaptchaEnterpriseKeyIosSettingsOutputReference | RecaptchaEnterpriseKeyIosSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_bundle_ids: cdktn.booleanToTerraform(struct!.allowAllBundleIds),
    allowed_bundle_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedBundleIds),
  }
}


export function recaptchaEnterpriseKeyIosSettingsToHclTerraform(struct?: RecaptchaEnterpriseKeyIosSettingsOutputReference | RecaptchaEnterpriseKeyIosSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all_bundle_ids: {
      value: cdktn.booleanToHclTerraform(struct!.allowAllBundleIds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_bundle_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedBundleIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecaptchaEnterpriseKeyIosSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyIosSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllBundleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllBundleIds = this._allowAllBundleIds;
    }
    if (this._allowedBundleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedBundleIds = this._allowedBundleIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyIosSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAllBundleIds = undefined;
      this._allowedBundleIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAllBundleIds = value.allowAllBundleIds;
      this._allowedBundleIds = value.allowedBundleIds;
    }
  }

  // allow_all_bundle_ids - computed: false, optional: true, required: false
  private _allowAllBundleIds?: boolean | cdktn.IResolvable; 
  public get allowAllBundleIds() {
    return this.getBooleanAttribute('allow_all_bundle_ids');
  }
  public set allowAllBundleIds(value: boolean | cdktn.IResolvable) {
    this._allowAllBundleIds = value;
  }
  public resetAllowAllBundleIds() {
    this._allowAllBundleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllBundleIdsInput() {
    return this._allowAllBundleIds;
  }

  // allowed_bundle_ids - computed: false, optional: true, required: false
  private _allowedBundleIds?: string[]; 
  public get allowedBundleIds() {
    return this.getListAttribute('allowed_bundle_ids');
  }
  public set allowedBundleIds(value: string[]) {
    this._allowedBundleIds = value;
  }
  public resetAllowedBundleIds() {
    this._allowedBundleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedBundleIdsInput() {
    return this._allowedBundleIds;
  }
}
export interface RecaptchaEnterpriseKeyTestingOptions {
  /**
  * For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#testing_challenge RecaptchaEnterpriseKey#testing_challenge}
  */
  readonly testingChallenge?: string;
  /**
  * All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#testing_score RecaptchaEnterpriseKey#testing_score}
  */
  readonly testingScore?: number;
}

export function recaptchaEnterpriseKeyTestingOptionsToTerraform(struct?: RecaptchaEnterpriseKeyTestingOptionsOutputReference | RecaptchaEnterpriseKeyTestingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    testing_challenge: cdktn.stringToTerraform(struct!.testingChallenge),
    testing_score: cdktn.numberToTerraform(struct!.testingScore),
  }
}


export function recaptchaEnterpriseKeyTestingOptionsToHclTerraform(struct?: RecaptchaEnterpriseKeyTestingOptionsOutputReference | RecaptchaEnterpriseKeyTestingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    testing_challenge: {
      value: cdktn.stringToHclTerraform(struct!.testingChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    testing_score: {
      value: cdktn.numberToHclTerraform(struct!.testingScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecaptchaEnterpriseKeyTestingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyTestingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testingChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.testingChallenge = this._testingChallenge;
    }
    if (this._testingScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.testingScore = this._testingScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyTestingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._testingChallenge = undefined;
      this._testingScore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._testingChallenge = value.testingChallenge;
      this._testingScore = value.testingScore;
    }
  }

  // testing_challenge - computed: true, optional: true, required: false
  private _testingChallenge?: string; 
  public get testingChallenge() {
    return this.getStringAttribute('testing_challenge');
  }
  public set testingChallenge(value: string) {
    this._testingChallenge = value;
  }
  public resetTestingChallenge() {
    this._testingChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingChallengeInput() {
    return this._testingChallenge;
  }

  // testing_score - computed: false, optional: true, required: false
  private _testingScore?: number; 
  public get testingScore() {
    return this.getNumberAttribute('testing_score');
  }
  public set testingScore(value: number) {
    this._testingScore = value;
  }
  public resetTestingScore() {
    this._testingScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingScoreInput() {
    return this._testingScore;
  }
}
export interface RecaptchaEnterpriseKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#create RecaptchaEnterpriseKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#delete RecaptchaEnterpriseKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#update RecaptchaEnterpriseKey#update}
  */
  readonly update?: string;
}

export function recaptchaEnterpriseKeyTimeoutsToTerraform(struct?: RecaptchaEnterpriseKeyTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function recaptchaEnterpriseKeyTimeoutsToHclTerraform(struct?: RecaptchaEnterpriseKeyTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecaptchaEnterpriseKeyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RecaptchaEnterpriseKeyTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface RecaptchaEnterpriseKeyWafSettings {
  /**
  * Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#waf_feature RecaptchaEnterpriseKey#waf_feature}
  */
  readonly wafFeature: string;
  /**
  * The WAF service that uses this key. Possible values: CA, FASTLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#waf_service RecaptchaEnterpriseKey#waf_service}
  */
  readonly wafService: string;
}

export function recaptchaEnterpriseKeyWafSettingsToTerraform(struct?: RecaptchaEnterpriseKeyWafSettingsOutputReference | RecaptchaEnterpriseKeyWafSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    waf_feature: cdktn.stringToTerraform(struct!.wafFeature),
    waf_service: cdktn.stringToTerraform(struct!.wafService),
  }
}


export function recaptchaEnterpriseKeyWafSettingsToHclTerraform(struct?: RecaptchaEnterpriseKeyWafSettingsOutputReference | RecaptchaEnterpriseKeyWafSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    waf_feature: {
      value: cdktn.stringToHclTerraform(struct!.wafFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_service: {
      value: cdktn.stringToHclTerraform(struct!.wafService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecaptchaEnterpriseKeyWafSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyWafSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wafFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafFeature = this._wafFeature;
    }
    if (this._wafService !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafService = this._wafService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyWafSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wafFeature = undefined;
      this._wafService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wafFeature = value.wafFeature;
      this._wafService = value.wafService;
    }
  }

  // waf_feature - computed: false, optional: false, required: true
  private _wafFeature?: string; 
  public get wafFeature() {
    return this.getStringAttribute('waf_feature');
  }
  public set wafFeature(value: string) {
    this._wafFeature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafFeatureInput() {
    return this._wafFeature;
  }

  // waf_service - computed: false, optional: false, required: true
  private _wafService?: string; 
  public get wafService() {
    return this.getStringAttribute('waf_service');
  }
  public set wafService(value: string) {
    this._wafService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafServiceInput() {
    return this._wafService;
  }
}
export interface RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings {
  /**
  * The action name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#action RecaptchaEnterpriseKey#action}
  */
  readonly action: string;
  /**
  * A challenge is triggered if the end-user score is below that threshold. Value must be between 0 and 1 (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#score_threshold RecaptchaEnterpriseKey#score_threshold}
  */
  readonly scoreThreshold: number;
}

export function recaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsToTerraform(struct?: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    score_threshold: cdktn.numberToTerraform(struct!.scoreThreshold),
  }
}


export function recaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsToHclTerraform(struct?: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score_threshold: {
      value: cdktn.numberToHclTerraform(struct!.scoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._scoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoreThreshold = this._scoreThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._scoreThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._scoreThreshold = value.scoreThreshold;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // score_threshold - computed: false, optional: false, required: true
  private _scoreThreshold?: number; 
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }
  public set scoreThreshold(value: number) {
    this._scoreThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreThresholdInput() {
    return this._scoreThreshold;
  }
}

export class RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsList extends cdktn.ComplexList {
  public internalValue? : RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsOutputReference {
    return new RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings {
  /**
  * A challenge is triggered if the end-user score is below that threshold. Value must be between 0 and 1 (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#score_threshold RecaptchaEnterpriseKey#score_threshold}
  */
  readonly scoreThreshold: number;
}

export function recaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsToTerraform(struct?: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsOutputReference | RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score_threshold: cdktn.numberToTerraform(struct!.scoreThreshold),
  }
}


export function recaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsToHclTerraform(struct?: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsOutputReference | RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score_threshold: {
      value: cdktn.numberToHclTerraform(struct!.scoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoreThreshold = this._scoreThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scoreThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scoreThreshold = value.scoreThreshold;
    }
  }

  // score_threshold - computed: false, optional: false, required: true
  private _scoreThreshold?: number; 
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }
  public set scoreThreshold(value: number) {
    this._scoreThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreThresholdInput() {
    return this._scoreThreshold;
  }
}
export interface RecaptchaEnterpriseKeyWebSettingsChallengeSettings {
  /**
  * action_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#action_settings RecaptchaEnterpriseKey#action_settings}
  */
  readonly actionSettings?: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings[] | cdktn.IResolvable;
  /**
  * default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#default_settings RecaptchaEnterpriseKey#default_settings}
  */
  readonly defaultSettings: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings;
}

export function recaptchaEnterpriseKeyWebSettingsChallengeSettingsToTerraform(struct?: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsOutputReference | RecaptchaEnterpriseKeyWebSettingsChallengeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_settings: cdktn.listMapper(recaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsToTerraform, true)(struct!.actionSettings),
    default_settings: recaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsToTerraform(struct!.defaultSettings),
  }
}


export function recaptchaEnterpriseKeyWebSettingsChallengeSettingsToHclTerraform(struct?: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsOutputReference | RecaptchaEnterpriseKeyWebSettingsChallengeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_settings: {
      value: cdktn.listMapperHcl(recaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsToHclTerraform, true)(struct!.actionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsList",
    },
    default_settings: {
      value: recaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsToHclTerraform(struct!.defaultSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecaptchaEnterpriseKeyWebSettingsChallengeSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyWebSettingsChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSettings = this._actionSettings?.internalValue;
    }
    if (this._defaultSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSettings = this._defaultSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyWebSettingsChallengeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionSettings.internalValue = undefined;
      this._defaultSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionSettings.internalValue = value.actionSettings;
      this._defaultSettings.internalValue = value.defaultSettings;
    }
  }

  // action_settings - computed: false, optional: true, required: false
  private _actionSettings = new RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsList(this, "action_settings", true);
  public get actionSettings() {
    return this._actionSettings;
  }
  public putActionSettings(value: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings[] | cdktn.IResolvable) {
    this._actionSettings.internalValue = value;
  }
  public resetActionSettings() {
    this._actionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSettingsInput() {
    return this._actionSettings.internalValue;
  }

  // default_settings - computed: false, optional: false, required: true
  private _defaultSettings = new RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsOutputReference(this, "default_settings");
  public get defaultSettings() {
    return this._defaultSettings;
  }
  public putDefaultSettings(value: RecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings) {
    this._defaultSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsInput() {
    return this._defaultSettings.internalValue;
  }
}
export interface RecaptchaEnterpriseKeyWebSettings {
  /**
  * If set to true, it means allowed_domains will not be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#allow_all_domains RecaptchaEnterpriseKey#allow_all_domains}
  */
  readonly allowAllDomains?: boolean | cdktn.IResolvable;
  /**
  * If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#allow_amp_traffic RecaptchaEnterpriseKey#allow_amp_traffic}
  */
  readonly allowAmpTraffic?: boolean | cdktn.IResolvable;
  /**
  * Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#allowed_domains RecaptchaEnterpriseKey#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#challenge_security_preference RecaptchaEnterpriseKey#challenge_security_preference}
  */
  readonly challengeSecurityPreference?: string;
  /**
  * Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE, POLICY_BASED_CHALLENGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#integration_type RecaptchaEnterpriseKey#integration_type}
  */
  readonly integrationType: string;
  /**
  * challenge_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#challenge_settings RecaptchaEnterpriseKey#challenge_settings}
  */
  readonly challengeSettings?: RecaptchaEnterpriseKeyWebSettingsChallengeSettings;
}

export function recaptchaEnterpriseKeyWebSettingsToTerraform(struct?: RecaptchaEnterpriseKeyWebSettingsOutputReference | RecaptchaEnterpriseKeyWebSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_domains: cdktn.booleanToTerraform(struct!.allowAllDomains),
    allow_amp_traffic: cdktn.booleanToTerraform(struct!.allowAmpTraffic),
    allowed_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedDomains),
    challenge_security_preference: cdktn.stringToTerraform(struct!.challengeSecurityPreference),
    integration_type: cdktn.stringToTerraform(struct!.integrationType),
    challenge_settings: recaptchaEnterpriseKeyWebSettingsChallengeSettingsToTerraform(struct!.challengeSettings),
  }
}


export function recaptchaEnterpriseKeyWebSettingsToHclTerraform(struct?: RecaptchaEnterpriseKeyWebSettingsOutputReference | RecaptchaEnterpriseKeyWebSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all_domains: {
      value: cdktn.booleanToHclTerraform(struct!.allowAllDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_amp_traffic: {
      value: cdktn.booleanToHclTerraform(struct!.allowAmpTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    challenge_security_preference: {
      value: cdktn.stringToHclTerraform(struct!.challengeSecurityPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_type: {
      value: cdktn.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_settings: {
      value: recaptchaEnterpriseKeyWebSettingsChallengeSettingsToHclTerraform(struct!.challengeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RecaptchaEnterpriseKeyWebSettingsChallengeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecaptchaEnterpriseKeyWebSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllDomains = this._allowAllDomains;
    }
    if (this._allowAmpTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAmpTraffic = this._allowAmpTraffic;
    }
    if (this._allowedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomains = this._allowedDomains;
    }
    if (this._challengeSecurityPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeSecurityPreference = this._challengeSecurityPreference;
    }
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    if (this._challengeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeSettings = this._challengeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyWebSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAllDomains = undefined;
      this._allowAmpTraffic = undefined;
      this._allowedDomains = undefined;
      this._challengeSecurityPreference = undefined;
      this._integrationType = undefined;
      this._challengeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAllDomains = value.allowAllDomains;
      this._allowAmpTraffic = value.allowAmpTraffic;
      this._allowedDomains = value.allowedDomains;
      this._challengeSecurityPreference = value.challengeSecurityPreference;
      this._integrationType = value.integrationType;
      this._challengeSettings.internalValue = value.challengeSettings;
    }
  }

  // allow_all_domains - computed: false, optional: true, required: false
  private _allowAllDomains?: boolean | cdktn.IResolvable; 
  public get allowAllDomains() {
    return this.getBooleanAttribute('allow_all_domains');
  }
  public set allowAllDomains(value: boolean | cdktn.IResolvable) {
    this._allowAllDomains = value;
  }
  public resetAllowAllDomains() {
    this._allowAllDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllDomainsInput() {
    return this._allowAllDomains;
  }

  // allow_amp_traffic - computed: false, optional: true, required: false
  private _allowAmpTraffic?: boolean | cdktn.IResolvable; 
  public get allowAmpTraffic() {
    return this.getBooleanAttribute('allow_amp_traffic');
  }
  public set allowAmpTraffic(value: boolean | cdktn.IResolvable) {
    this._allowAmpTraffic = value;
  }
  public resetAllowAmpTraffic() {
    this._allowAmpTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAmpTrafficInput() {
    return this._allowAmpTraffic;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // challenge_security_preference - computed: true, optional: true, required: false
  private _challengeSecurityPreference?: string; 
  public get challengeSecurityPreference() {
    return this.getStringAttribute('challenge_security_preference');
  }
  public set challengeSecurityPreference(value: string) {
    this._challengeSecurityPreference = value;
  }
  public resetChallengeSecurityPreference() {
    this._challengeSecurityPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeSecurityPreferenceInput() {
    return this._challengeSecurityPreference;
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // challenge_settings - computed: false, optional: true, required: false
  private _challengeSettings = new RecaptchaEnterpriseKeyWebSettingsChallengeSettingsOutputReference(this, "challenge_settings");
  public get challengeSettings() {
    return this._challengeSettings;
  }
  public putChallengeSettings(value: RecaptchaEnterpriseKeyWebSettingsChallengeSettings) {
    this._challengeSettings.internalValue = value;
  }
  public resetChallengeSettings() {
    this._challengeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeSettingsInput() {
    return this._challengeSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key google_recaptcha_enterprise_key}
*/
export class RecaptchaEnterpriseKey extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_recaptcha_enterprise_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RecaptchaEnterpriseKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecaptchaEnterpriseKey to import
  * @param importFromId The id of the existing RecaptchaEnterpriseKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecaptchaEnterpriseKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_recaptcha_enterprise_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/recaptcha_enterprise_key google_recaptcha_enterprise_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecaptchaEnterpriseKeyConfig
  */
  public constructor(scope: Construct, id: string, config: RecaptchaEnterpriseKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_recaptcha_enterprise_key',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.32.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._androidSettings.internalValue = config.androidSettings;
    this._iosSettings.internalValue = config.iosSettings;
    this._testingOptions.internalValue = config.testingOptions;
    this._timeouts.internalValue = config.timeouts;
    this._wafSettings.internalValue = config.wafSettings;
    this._webSettings.internalValue = config.webSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // android_settings - computed: false, optional: true, required: false
  private _androidSettings = new RecaptchaEnterpriseKeyAndroidSettingsOutputReference(this, "android_settings");
  public get androidSettings() {
    return this._androidSettings;
  }
  public putAndroidSettings(value: RecaptchaEnterpriseKeyAndroidSettings) {
    this._androidSettings.internalValue = value;
  }
  public resetAndroidSettings() {
    this._androidSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get androidSettingsInput() {
    return this._androidSettings.internalValue;
  }

  // ios_settings - computed: false, optional: true, required: false
  private _iosSettings = new RecaptchaEnterpriseKeyIosSettingsOutputReference(this, "ios_settings");
  public get iosSettings() {
    return this._iosSettings;
  }
  public putIosSettings(value: RecaptchaEnterpriseKeyIosSettings) {
    this._iosSettings.internalValue = value;
  }
  public resetIosSettings() {
    this._iosSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosSettingsInput() {
    return this._iosSettings.internalValue;
  }

  // testing_options - computed: false, optional: true, required: false
  private _testingOptions = new RecaptchaEnterpriseKeyTestingOptionsOutputReference(this, "testing_options");
  public get testingOptions() {
    return this._testingOptions;
  }
  public putTestingOptions(value: RecaptchaEnterpriseKeyTestingOptions) {
    this._testingOptions.internalValue = value;
  }
  public resetTestingOptions() {
    this._testingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingOptionsInput() {
    return this._testingOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RecaptchaEnterpriseKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RecaptchaEnterpriseKeyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // waf_settings - computed: false, optional: true, required: false
  private _wafSettings = new RecaptchaEnterpriseKeyWafSettingsOutputReference(this, "waf_settings");
  public get wafSettings() {
    return this._wafSettings;
  }
  public putWafSettings(value: RecaptchaEnterpriseKeyWafSettings) {
    this._wafSettings.internalValue = value;
  }
  public resetWafSettings() {
    this._wafSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafSettingsInput() {
    return this._wafSettings.internalValue;
  }

  // web_settings - computed: false, optional: true, required: false
  private _webSettings = new RecaptchaEnterpriseKeyWebSettingsOutputReference(this, "web_settings");
  public get webSettings() {
    return this._webSettings;
  }
  public putWebSettings(value: RecaptchaEnterpriseKeyWebSettings) {
    this._webSettings.internalValue = value;
  }
  public resetWebSettings() {
    this._webSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSettingsInput() {
    return this._webSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      project: cdktn.stringToTerraform(this._project),
      android_settings: recaptchaEnterpriseKeyAndroidSettingsToTerraform(this._androidSettings.internalValue),
      ios_settings: recaptchaEnterpriseKeyIosSettingsToTerraform(this._iosSettings.internalValue),
      testing_options: recaptchaEnterpriseKeyTestingOptionsToTerraform(this._testingOptions.internalValue),
      timeouts: recaptchaEnterpriseKeyTimeoutsToTerraform(this._timeouts.internalValue),
      waf_settings: recaptchaEnterpriseKeyWafSettingsToTerraform(this._wafSettings.internalValue),
      web_settings: recaptchaEnterpriseKeyWebSettingsToTerraform(this._webSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      android_settings: {
        value: recaptchaEnterpriseKeyAndroidSettingsToHclTerraform(this._androidSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecaptchaEnterpriseKeyAndroidSettingsList",
      },
      ios_settings: {
        value: recaptchaEnterpriseKeyIosSettingsToHclTerraform(this._iosSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecaptchaEnterpriseKeyIosSettingsList",
      },
      testing_options: {
        value: recaptchaEnterpriseKeyTestingOptionsToHclTerraform(this._testingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecaptchaEnterpriseKeyTestingOptionsList",
      },
      timeouts: {
        value: recaptchaEnterpriseKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RecaptchaEnterpriseKeyTimeouts",
      },
      waf_settings: {
        value: recaptchaEnterpriseKeyWafSettingsToHclTerraform(this._wafSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecaptchaEnterpriseKeyWafSettingsList",
      },
      web_settings: {
        value: recaptchaEnterpriseKeyWebSettingsToHclTerraform(this._webSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecaptchaEnterpriseKeyWebSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
