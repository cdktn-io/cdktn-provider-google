/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FirebaseRemoteConfigRemoteConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#id FirebaseRemoteConfigRemoteConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#project FirebaseRemoteConfigRemoteConfig#project}
  */
  readonly project?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#conditions FirebaseRemoteConfigRemoteConfig#conditions}
  */
  readonly conditions?: FirebaseRemoteConfigRemoteConfigConditions[] | cdktn.IResolvable;
  /**
  * parameter_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#parameter_groups FirebaseRemoteConfigRemoteConfig#parameter_groups}
  */
  readonly parameterGroups?: FirebaseRemoteConfigRemoteConfigParameterGroups[] | cdktn.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#parameters FirebaseRemoteConfigRemoteConfig#parameters}
  */
  readonly parameters?: FirebaseRemoteConfigRemoteConfigParameters[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#timeouts FirebaseRemoteConfigRemoteConfig#timeouts}
  */
  readonly timeouts?: FirebaseRemoteConfigRemoteConfigTimeouts;
}
export interface FirebaseRemoteConfigRemoteConfigVersionUpdateUser {
}

export function firebaseRemoteConfigRemoteConfigVersionUpdateUserToTerraform(struct?: FirebaseRemoteConfigRemoteConfigVersionUpdateUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firebaseRemoteConfigRemoteConfigVersionUpdateUserToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigVersionUpdateUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirebaseRemoteConfigRemoteConfigVersionUpdateUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigVersionUpdateUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class FirebaseRemoteConfigRemoteConfigVersionUpdateUserList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference {
    return new FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirebaseRemoteConfigRemoteConfigVersion {
}

export function firebaseRemoteConfigRemoteConfigVersionToTerraform(struct?: FirebaseRemoteConfigRemoteConfigVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firebaseRemoteConfigRemoteConfigVersionToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirebaseRemoteConfigRemoteConfigVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirebaseRemoteConfigRemoteConfigVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_legacy - computed: true, optional: false, required: false
  public get isLegacy() {
    return this.getBooleanAttribute('is_legacy');
  }

  // rollback_source - computed: true, optional: false, required: false
  public get rollbackSource() {
    return this.getStringAttribute('rollback_source');
  }

  // update_origin - computed: true, optional: false, required: false
  public get updateOrigin() {
    return this.getStringAttribute('update_origin');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // update_user - computed: true, optional: false, required: false
  private _updateUser = new FirebaseRemoteConfigRemoteConfigVersionUpdateUserList(this, "update_user", false);
  public get updateUser() {
    return this._updateUser;
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getStringAttribute('version_number');
  }
}

export class FirebaseRemoteConfigRemoteConfigVersionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirebaseRemoteConfigRemoteConfigVersionOutputReference {
    return new FirebaseRemoteConfigRemoteConfigVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirebaseRemoteConfigRemoteConfigConditions {
  /**
  * The logic of this condition.
  * 
  * See the documentation regarding
  * [Condition
  * Expressions](https://firebase.google.com/docs/remote-config/condition-reference)
  * for the expected syntax of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#expression FirebaseRemoteConfigRemoteConfig#expression}
  */
  readonly expression: string;
  /**
  * A non-empty and unique name of this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#name FirebaseRemoteConfigRemoteConfig#name}
  */
  readonly name: string;
  /**
  * The color associated with this condition for display purposes in the Firebase Console.
  * Not specifying this value results in the Console picking an arbitrary color to associate with the condition. Possible values: ["BLUE", "BROWN", "CYAN", "DEEP_ORANGE", "GREEN", "INDIGO", "LIME", "ORANGE", "PINK", "PURPLE", "TEAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#tag_color FirebaseRemoteConfigRemoteConfig#tag_color}
  */
  readonly tagColor?: string;
}

export function firebaseRemoteConfigRemoteConfigConditionsToTerraform(struct?: FirebaseRemoteConfigRemoteConfigConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    name: cdktn.stringToTerraform(struct!.name),
    tag_color: cdktn.stringToTerraform(struct!.tagColor),
  }
}


export function firebaseRemoteConfigRemoteConfigConditionsToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_color: {
      value: cdktn.stringToHclTerraform(struct!.tagColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirebaseRemoteConfigRemoteConfigConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirebaseRemoteConfigRemoteConfigConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tagColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagColor = this._tagColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
      this._tagColor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
      this._tagColor = value.tagColor;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tag_color - computed: false, optional: true, required: false
  private _tagColor?: string; 
  public get tagColor() {
    return this.getStringAttribute('tag_color');
  }
  public set tagColor(value: string) {
    this._tagColor = value;
  }
  public resetTagColor() {
    this._tagColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagColorInput() {
    return this._tagColor;
  }
}

export class FirebaseRemoteConfigRemoteConfigConditionsList extends cdktn.ComplexList {
  public internalValue? : FirebaseRemoteConfigRemoteConfigConditions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirebaseRemoteConfigRemoteConfigConditionsOutputReference {
    return new FirebaseRemoteConfigRemoteConfigConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}
  */
  readonly conditionName: string;
  /**
  * If true, the parameter is omitted from the parameter values returned
  * to a client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}
  */
  readonly useInAppDefault?: boolean | cdktn.IResolvable;
  /**
  * The string value that the parameter is set to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}
  */
  readonly value?: string;
}

export function firebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesToTerraform(struct?: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_name: cdktn.stringToTerraform(struct!.conditionName),
    use_in_app_default: cdktn.booleanToTerraform(struct!.useInAppDefault),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function firebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_name: {
      value: cdktn.stringToHclTerraform(struct!.conditionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_in_app_default: {
      value: cdktn.booleanToHclTerraform(struct!.useInAppDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionName = this._conditionName;
    }
    if (this._useInAppDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInAppDefault = this._useInAppDefault;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionName = undefined;
      this._useInAppDefault = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionName = value.conditionName;
      this._useInAppDefault = value.useInAppDefault;
      this._value = value.value;
    }
  }

  // condition_name - computed: false, optional: false, required: true
  private _conditionName?: string; 
  public get conditionName() {
    return this.getStringAttribute('condition_name');
  }
  public set conditionName(value: string) {
    this._conditionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionNameInput() {
    return this._conditionName;
  }

  // use_in_app_default - computed: false, optional: true, required: false
  private _useInAppDefault?: boolean | cdktn.IResolvable; 
  public get useInAppDefault() {
    return this.getBooleanAttribute('use_in_app_default');
  }
  public set useInAppDefault(value: boolean | cdktn.IResolvable) {
    this._useInAppDefault = value;
  }
  public resetUseInAppDefault() {
    this._useInAppDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInAppDefaultInput() {
    return this._useInAppDefault;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList extends cdktn.ComplexList {
  public internalValue? : FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference {
    return new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue {
  /**
  * If true, the parameter is omitted from the parameter values returned
  * to a client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}
  */
  readonly useInAppDefault?: boolean | cdktn.IResolvable;
  /**
  * The string value that the parameter is set to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}
  */
  readonly value?: string;
}

export function firebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueToTerraform(struct?: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference | FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_in_app_default: cdktn.booleanToTerraform(struct!.useInAppDefault),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function firebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference | FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_in_app_default: {
      value: cdktn.booleanToHclTerraform(struct!.useInAppDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useInAppDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInAppDefault = this._useInAppDefault;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useInAppDefault = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useInAppDefault = value.useInAppDefault;
      this._value = value.value;
    }
  }

  // use_in_app_default - computed: false, optional: true, required: false
  private _useInAppDefault?: boolean | cdktn.IResolvable; 
  public get useInAppDefault() {
    return this.getBooleanAttribute('use_in_app_default');
  }
  public set useInAppDefault(value: boolean | cdktn.IResolvable) {
    this._useInAppDefault = value;
  }
  public resetUseInAppDefault() {
    this._useInAppDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInAppDefaultInput() {
    return this._useInAppDefault;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface FirebaseRemoteConfigRemoteConfigParameterGroupsParameters {
  /**
  * A description for this Parameter. Its length must be less than or equal to
  * 256 characters . A description may contain any Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}
  */
  readonly parameterName: string;
  /**
  * The data type for all values of this parameter in the current version of
  * the template. Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#value_type FirebaseRemoteConfigRemoteConfig#value_type}
  */
  readonly valueType?: string;
  /**
  * conditional_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#conditional_values FirebaseRemoteConfigRemoteConfig#conditional_values}
  */
  readonly conditionalValues?: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] | cdktn.IResolvable;
  /**
  * default_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#default_value FirebaseRemoteConfigRemoteConfig#default_value}
  */
  readonly defaultValue?: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue;
}

export function firebaseRemoteConfigRemoteConfigParameterGroupsParametersToTerraform(struct?: FirebaseRemoteConfigRemoteConfigParameterGroupsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    value_type: cdktn.stringToTerraform(struct!.valueType),
    conditional_values: cdktn.listMapper(firebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesToTerraform, true)(struct!.conditionalValues),
    default_value: firebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueToTerraform(struct!.defaultValue),
  }
}


export function firebaseRemoteConfigRemoteConfigParameterGroupsParametersToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigParameterGroupsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktn.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditional_values: {
      value: cdktn.listMapperHcl(firebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesToHclTerraform, true)(struct!.conditionalValues),
      isBlock: true,
      type: "set",
      storageClassType: "FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList",
    },
    default_value: {
      value: firebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueToHclTerraform(struct!.defaultValue),
      isBlock: true,
      type: "list",
      storageClassType: "FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirebaseRemoteConfigRemoteConfigParameterGroupsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._conditionalValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalValues = this._conditionalValues?.internalValue;
    }
    if (this._defaultValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigParameterGroupsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._parameterName = undefined;
      this._valueType = undefined;
      this._conditionalValues.internalValue = undefined;
      this._defaultValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._parameterName = value.parameterName;
      this._valueType = value.valueType;
      this._conditionalValues.internalValue = value.conditionalValues;
      this._defaultValue.internalValue = value.defaultValue;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // conditional_values - computed: false, optional: true, required: false
  private _conditionalValues = new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList(this, "conditional_values", true);
  public get conditionalValues() {
    return this._conditionalValues;
  }
  public putConditionalValues(value: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] | cdktn.IResolvable) {
    this._conditionalValues.internalValue = value;
  }
  public resetConditionalValues() {
    this._conditionalValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalValuesInput() {
    return this._conditionalValues.internalValue;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue = new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
  public putDefaultValue(value: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue) {
    this._defaultValue.internalValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue.internalValue;
  }
}

export class FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList extends cdktn.ComplexList {
  public internalValue? : FirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference {
    return new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirebaseRemoteConfigRemoteConfigParameterGroups {
  /**
  * A description for the group. Its length must be less than or equal to 256
  * characters. A description may contain any Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#parameter_group_name FirebaseRemoteConfigRemoteConfig#parameter_group_name}
  */
  readonly parameterGroupName: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#parameters FirebaseRemoteConfigRemoteConfig#parameters}
  */
  readonly parameters?: FirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] | cdktn.IResolvable;
}

export function firebaseRemoteConfigRemoteConfigParameterGroupsToTerraform(struct?: FirebaseRemoteConfigRemoteConfigParameterGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    parameter_group_name: cdktn.stringToTerraform(struct!.parameterGroupName),
    parameters: cdktn.listMapper(firebaseRemoteConfigRemoteConfigParameterGroupsParametersToTerraform, true)(struct!.parameters),
  }
}


export function firebaseRemoteConfigRemoteConfigParameterGroupsToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigParameterGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_group_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(firebaseRemoteConfigRemoteConfigParameterGroupsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirebaseRemoteConfigRemoteConfigParameterGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._parameterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterGroupName = this._parameterGroupName;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigParameterGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._parameterGroupName = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._parameterGroupName = value.parameterGroupName;
      this._parameters.internalValue = value.parameters;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // parameter_group_name - computed: false, optional: false, required: true
  private _parameterGroupName?: string; 
  public get parameterGroupName() {
    return this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string) {
    this._parameterGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupNameInput() {
    return this._parameterGroupName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: FirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class FirebaseRemoteConfigRemoteConfigParameterGroupsList extends cdktn.ComplexList {
  public internalValue? : FirebaseRemoteConfigRemoteConfigParameterGroups[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference {
    return new FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirebaseRemoteConfigRemoteConfigParametersConditionalValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}
  */
  readonly conditionName: string;
  /**
  * If true, the parameter is omitted from the parameter values returned
  * to a client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}
  */
  readonly useInAppDefault?: boolean | cdktn.IResolvable;
  /**
  * The string value that the parameter is set to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}
  */
  readonly value?: string;
}

export function firebaseRemoteConfigRemoteConfigParametersConditionalValuesToTerraform(struct?: FirebaseRemoteConfigRemoteConfigParametersConditionalValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_name: cdktn.stringToTerraform(struct!.conditionName),
    use_in_app_default: cdktn.booleanToTerraform(struct!.useInAppDefault),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function firebaseRemoteConfigRemoteConfigParametersConditionalValuesToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigParametersConditionalValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_name: {
      value: cdktn.stringToHclTerraform(struct!.conditionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_in_app_default: {
      value: cdktn.booleanToHclTerraform(struct!.useInAppDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirebaseRemoteConfigRemoteConfigParametersConditionalValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionName = this._conditionName;
    }
    if (this._useInAppDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInAppDefault = this._useInAppDefault;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigParametersConditionalValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionName = undefined;
      this._useInAppDefault = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionName = value.conditionName;
      this._useInAppDefault = value.useInAppDefault;
      this._value = value.value;
    }
  }

  // condition_name - computed: false, optional: false, required: true
  private _conditionName?: string; 
  public get conditionName() {
    return this.getStringAttribute('condition_name');
  }
  public set conditionName(value: string) {
    this._conditionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionNameInput() {
    return this._conditionName;
  }

  // use_in_app_default - computed: false, optional: true, required: false
  private _useInAppDefault?: boolean | cdktn.IResolvable; 
  public get useInAppDefault() {
    return this.getBooleanAttribute('use_in_app_default');
  }
  public set useInAppDefault(value: boolean | cdktn.IResolvable) {
    this._useInAppDefault = value;
  }
  public resetUseInAppDefault() {
    this._useInAppDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInAppDefaultInput() {
    return this._useInAppDefault;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList extends cdktn.ComplexList {
  public internalValue? : FirebaseRemoteConfigRemoteConfigParametersConditionalValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference {
    return new FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirebaseRemoteConfigRemoteConfigParametersDefaultValue {
  /**
  * If true, the parameter is omitted from the parameter values returned
  * to a client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}
  */
  readonly useInAppDefault?: boolean | cdktn.IResolvable;
  /**
  * The string value that the parameter is set to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}
  */
  readonly value?: string;
}

export function firebaseRemoteConfigRemoteConfigParametersDefaultValueToTerraform(struct?: FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference | FirebaseRemoteConfigRemoteConfigParametersDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_in_app_default: cdktn.booleanToTerraform(struct!.useInAppDefault),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function firebaseRemoteConfigRemoteConfigParametersDefaultValueToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference | FirebaseRemoteConfigRemoteConfigParametersDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_in_app_default: {
      value: cdktn.booleanToHclTerraform(struct!.useInAppDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirebaseRemoteConfigRemoteConfigParametersDefaultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useInAppDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInAppDefault = this._useInAppDefault;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigParametersDefaultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useInAppDefault = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useInAppDefault = value.useInAppDefault;
      this._value = value.value;
    }
  }

  // use_in_app_default - computed: false, optional: true, required: false
  private _useInAppDefault?: boolean | cdktn.IResolvable; 
  public get useInAppDefault() {
    return this.getBooleanAttribute('use_in_app_default');
  }
  public set useInAppDefault(value: boolean | cdktn.IResolvable) {
    this._useInAppDefault = value;
  }
  public resetUseInAppDefault() {
    this._useInAppDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInAppDefaultInput() {
    return this._useInAppDefault;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface FirebaseRemoteConfigRemoteConfigParameters {
  /**
  * A description for this Parameter. Its length must be less than or equal to
  * 256 characters . A description may contain any Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}
  */
  readonly parameterName: string;
  /**
  * The data type for all values of this parameter in the current version of
  * the template. Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#value_type FirebaseRemoteConfigRemoteConfig#value_type}
  */
  readonly valueType?: string;
  /**
  * conditional_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#conditional_values FirebaseRemoteConfigRemoteConfig#conditional_values}
  */
  readonly conditionalValues?: FirebaseRemoteConfigRemoteConfigParametersConditionalValues[] | cdktn.IResolvable;
  /**
  * default_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#default_value FirebaseRemoteConfigRemoteConfig#default_value}
  */
  readonly defaultValue?: FirebaseRemoteConfigRemoteConfigParametersDefaultValue;
}

export function firebaseRemoteConfigRemoteConfigParametersToTerraform(struct?: FirebaseRemoteConfigRemoteConfigParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    value_type: cdktn.stringToTerraform(struct!.valueType),
    conditional_values: cdktn.listMapper(firebaseRemoteConfigRemoteConfigParametersConditionalValuesToTerraform, true)(struct!.conditionalValues),
    default_value: firebaseRemoteConfigRemoteConfigParametersDefaultValueToTerraform(struct!.defaultValue),
  }
}


export function firebaseRemoteConfigRemoteConfigParametersToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktn.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditional_values: {
      value: cdktn.listMapperHcl(firebaseRemoteConfigRemoteConfigParametersConditionalValuesToHclTerraform, true)(struct!.conditionalValues),
      isBlock: true,
      type: "set",
      storageClassType: "FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList",
    },
    default_value: {
      value: firebaseRemoteConfigRemoteConfigParametersDefaultValueToHclTerraform(struct!.defaultValue),
      isBlock: true,
      type: "list",
      storageClassType: "FirebaseRemoteConfigRemoteConfigParametersDefaultValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirebaseRemoteConfigRemoteConfigParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirebaseRemoteConfigRemoteConfigParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._conditionalValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalValues = this._conditionalValues?.internalValue;
    }
    if (this._defaultValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._parameterName = undefined;
      this._valueType = undefined;
      this._conditionalValues.internalValue = undefined;
      this._defaultValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._parameterName = value.parameterName;
      this._valueType = value.valueType;
      this._conditionalValues.internalValue = value.conditionalValues;
      this._defaultValue.internalValue = value.defaultValue;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // conditional_values - computed: false, optional: true, required: false
  private _conditionalValues = new FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList(this, "conditional_values", true);
  public get conditionalValues() {
    return this._conditionalValues;
  }
  public putConditionalValues(value: FirebaseRemoteConfigRemoteConfigParametersConditionalValues[] | cdktn.IResolvable) {
    this._conditionalValues.internalValue = value;
  }
  public resetConditionalValues() {
    this._conditionalValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalValuesInput() {
    return this._conditionalValues.internalValue;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue = new FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
  public putDefaultValue(value: FirebaseRemoteConfigRemoteConfigParametersDefaultValue) {
    this._defaultValue.internalValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue.internalValue;
  }
}

export class FirebaseRemoteConfigRemoteConfigParametersList extends cdktn.ComplexList {
  public internalValue? : FirebaseRemoteConfigRemoteConfigParameters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirebaseRemoteConfigRemoteConfigParametersOutputReference {
    return new FirebaseRemoteConfigRemoteConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirebaseRemoteConfigRemoteConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#create FirebaseRemoteConfigRemoteConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#delete FirebaseRemoteConfigRemoteConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#update FirebaseRemoteConfigRemoteConfig#update}
  */
  readonly update?: string;
}

export function firebaseRemoteConfigRemoteConfigTimeoutsToTerraform(struct?: FirebaseRemoteConfigRemoteConfigTimeouts | cdktn.IResolvable): any {
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


export function firebaseRemoteConfigRemoteConfigTimeoutsToHclTerraform(struct?: FirebaseRemoteConfigRemoteConfigTimeouts | cdktn.IResolvable): any {
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

export class FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirebaseRemoteConfigRemoteConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FirebaseRemoteConfigRemoteConfigTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config google_firebase_remote_config_remote_config}
*/
export class FirebaseRemoteConfigRemoteConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_remote_config_remote_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirebaseRemoteConfigRemoteConfig to import
  * @param importFromId The id of the existing FirebaseRemoteConfigRemoteConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirebaseRemoteConfigRemoteConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_remote_config_remote_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/firebase_remote_config_remote_config google_firebase_remote_config_remote_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirebaseRemoteConfigRemoteConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirebaseRemoteConfigRemoteConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_remote_config_remote_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
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
    this._id = config.id;
    this._project = config.project;
    this._conditions.internalValue = config.conditions;
    this._parameterGroups.internalValue = config.parameterGroups;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // version - computed: true, optional: false, required: false
  private _version = new FirebaseRemoteConfigRemoteConfigVersionList(this, "version", false);
  public get version() {
    return this._version;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new FirebaseRemoteConfigRemoteConfigConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: FirebaseRemoteConfigRemoteConfigConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // parameter_groups - computed: false, optional: true, required: false
  private _parameterGroups = new FirebaseRemoteConfigRemoteConfigParameterGroupsList(this, "parameter_groups", true);
  public get parameterGroups() {
    return this._parameterGroups;
  }
  public putParameterGroups(value: FirebaseRemoteConfigRemoteConfigParameterGroups[] | cdktn.IResolvable) {
    this._parameterGroups.internalValue = value;
  }
  public resetParameterGroups() {
    this._parameterGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupsInput() {
    return this._parameterGroups.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new FirebaseRemoteConfigRemoteConfigParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: FirebaseRemoteConfigRemoteConfigParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirebaseRemoteConfigRemoteConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      conditions: cdktn.listMapper(firebaseRemoteConfigRemoteConfigConditionsToTerraform, true)(this._conditions.internalValue),
      parameter_groups: cdktn.listMapper(firebaseRemoteConfigRemoteConfigParameterGroupsToTerraform, true)(this._parameterGroups.internalValue),
      parameters: cdktn.listMapper(firebaseRemoteConfigRemoteConfigParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: firebaseRemoteConfigRemoteConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktn.listMapperHcl(firebaseRemoteConfigRemoteConfigConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirebaseRemoteConfigRemoteConfigConditionsList",
      },
      parameter_groups: {
        value: cdktn.listMapperHcl(firebaseRemoteConfigRemoteConfigParameterGroupsToHclTerraform, true)(this._parameterGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirebaseRemoteConfigRemoteConfigParameterGroupsList",
      },
      parameters: {
        value: cdktn.listMapperHcl(firebaseRemoteConfigRemoteConfigParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirebaseRemoteConfigRemoteConfigParametersList",
      },
      timeouts: {
        value: firebaseRemoteConfigRemoteConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirebaseRemoteConfigRemoteConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
