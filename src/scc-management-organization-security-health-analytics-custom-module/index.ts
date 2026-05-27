/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#deletion_policy SccManagementOrganizationSecurityHealthAnalyticsCustomModule#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name of the Security Health Analytics custom module. This
  * display name becomes the finding category for all findings that are
  * returned by this custom module. The display name must be between 1 and
  * 128 characters, start with a lowercase letter, and contain alphanumeric
  * characters or underscores only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#display_name SccManagementOrganizationSecurityHealthAnalyticsCustomModule#display_name}
  */
  readonly displayName?: string;
  /**
  * The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#enablement_state SccManagementOrganizationSecurityHealthAnalyticsCustomModule#enablement_state}
  */
  readonly enablementState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#id SccManagementOrganizationSecurityHealthAnalyticsCustomModule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location ID of the parent organization. If not provided, 'global' will be used as the default location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#location SccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}
  */
  readonly location?: string;
  /**
  * Numerical ID of the parent organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#organization SccManagementOrganizationSecurityHealthAnalyticsCustomModule#organization}
  */
  readonly organization: string;
  /**
  * custom_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#custom_config SccManagementOrganizationSecurityHealthAnalyticsCustomModule#custom_config}
  */
  readonly customConfig?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#timeouts SccManagementOrganizationSecurityHealthAnalyticsCustomModule#timeouts}
  */
  readonly timeouts?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts;
}
export interface SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression {
  /**
  * Description of the expression. This is a longer text which describes the
  * expression, e.g. when hovered over it in a UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#description SccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#expression SccManagementOrganizationSecurityHealthAnalyticsCustomModule#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a
  * file name and a position in the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#location SccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose. This can
  * be used e.g. in UIs which allow to enter the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#title SccManagementOrganizationSecurityHealthAnalyticsCustomModule#title}
  */
  readonly title?: string;
}

export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionToTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference | SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    expression: cdktn.stringToTerraform(struct!.expression),
    location: cdktn.stringToTerraform(struct!.location),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionToHclTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference | SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression): any {
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
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties {
  /**
  * Name of the property for the custom output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#name SccManagementOrganizationSecurityHealthAnalyticsCustomModule#name}
  */
  readonly name?: string;
  /**
  * value_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#value_expression SccManagementOrganizationSecurityHealthAnalyticsCustomModule#value_expression}
  */
  readonly valueExpression?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression;
}

export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesToTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_expression: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionToTerraform(struct!.valueExpression),
  }
}


export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesToHclTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_expression: {
      value: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionToHclTerraform(struct!.valueExpression),
      isBlock: true,
      type: "list",
      storageClassType: "SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueExpression = this._valueExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueExpression.internalValue = value.valueExpression;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value_expression - computed: false, optional: true, required: false
  private _valueExpression = new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(this, "value_expression");
  public get valueExpression() {
    return this._valueExpression;
  }
  public putValueExpression(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression) {
    this._valueExpression.internalValue = value;
  }
  public resetValueExpression() {
    this._valueExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueExpressionInput() {
    return this._valueExpression.internalValue;
  }
}

export class SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList extends cdktn.ComplexList {
  public internalValue? : SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties[] | cdktn.IResolvable

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
  public get(index: number): SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference {
    return new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput {
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#properties SccManagementOrganizationSecurityHealthAnalyticsCustomModule#properties}
  */
  readonly properties?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties[] | cdktn.IResolvable;
}

export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputToTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference | SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktn.listMapper(sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesToTerraform, true)(struct!.properties),
  }
}


export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputToHclTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference | SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktn.listMapperHcl(sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties.internalValue = value.properties;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties[] | cdktn.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate {
  /**
  * Description of the expression. This is a longer text which describes the
  * expression, e.g. when hovered over it in a UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#description SccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#expression SccManagementOrganizationSecurityHealthAnalyticsCustomModule#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a
  * file name and a position in the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#location SccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose. This can
  * be used e.g. in UIs which allow to enter the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#title SccManagementOrganizationSecurityHealthAnalyticsCustomModule#title}
  */
  readonly title?: string;
}

export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateToTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference | SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    expression: cdktn.stringToTerraform(struct!.expression),
    location: cdktn.stringToTerraform(struct!.location),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateToHclTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference | SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate): any {
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
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector {
  /**
  * The resource types to run the detector on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#resource_types SccManagementOrganizationSecurityHealthAnalyticsCustomModule#resource_types}
  */
  readonly resourceTypes: string[];
}

export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorToTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference | SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorToHclTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference | SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}
export interface SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig {
  /**
  * Text that describes the vulnerability or misconfiguration that the custom
  * module detects. This explanation is returned with each finding instance to
  * help investigators understand the detected issue. The text must be enclosed in quotation marks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#description SccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}
  */
  readonly description?: string;
  /**
  * An explanation of the recommended steps that security teams can take to resolve
  * the detected issue. This explanation is returned with each finding generated by
  * this module in the nextSteps property of the finding JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#recommendation SccManagementOrganizationSecurityHealthAnalyticsCustomModule#recommendation}
  */
  readonly recommendation: string;
  /**
  * The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#severity SccManagementOrganizationSecurityHealthAnalyticsCustomModule#severity}
  */
  readonly severity: string;
  /**
  * custom_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#custom_output SccManagementOrganizationSecurityHealthAnalyticsCustomModule#custom_output}
  */
  readonly customOutput?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput;
  /**
  * predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#predicate SccManagementOrganizationSecurityHealthAnalyticsCustomModule#predicate}
  */
  readonly predicate: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate;
  /**
  * resource_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#resource_selector SccManagementOrganizationSecurityHealthAnalyticsCustomModule#resource_selector}
  */
  readonly resourceSelector: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector;
}

export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigToTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference | SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    recommendation: cdktn.stringToTerraform(struct!.recommendation),
    severity: cdktn.stringToTerraform(struct!.severity),
    custom_output: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputToTerraform(struct!.customOutput),
    predicate: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateToTerraform(struct!.predicate),
    resource_selector: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorToTerraform(struct!.resourceSelector),
  }
}


export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigToHclTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference | SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig): any {
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
    recommendation: {
      value: cdktn.stringToHclTerraform(struct!.recommendation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktn.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_output: {
      value: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputToHclTerraform(struct!.customOutput),
      isBlock: true,
      type: "list",
      storageClassType: "SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputList",
    },
    predicate: {
      value: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateToHclTerraform(struct!.predicate),
      isBlock: true,
      type: "list",
      storageClassType: "SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateList",
    },
    resource_selector: {
      value: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorToHclTerraform(struct!.resourceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._recommendation !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendation = this._recommendation;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._customOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOutput = this._customOutput?.internalValue;
    }
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    if (this._resourceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelector = this._resourceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._recommendation = undefined;
      this._severity = undefined;
      this._customOutput.internalValue = undefined;
      this._predicate.internalValue = undefined;
      this._resourceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._recommendation = value.recommendation;
      this._severity = value.severity;
      this._customOutput.internalValue = value.customOutput;
      this._predicate.internalValue = value.predicate;
      this._resourceSelector.internalValue = value.resourceSelector;
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

  // recommendation - computed: false, optional: false, required: true
  private _recommendation?: string; 
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }
  public set recommendation(value: string) {
    this._recommendation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationInput() {
    return this._recommendation;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // custom_output - computed: false, optional: true, required: false
  private _customOutput = new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(this, "custom_output");
  public get customOutput() {
    return this._customOutput;
  }
  public putCustomOutput(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput) {
    this._customOutput.internalValue = value;
  }
  public resetCustomOutput() {
    this._customOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOutputInput() {
    return this._customOutput.internalValue;
  }

  // predicate - computed: false, optional: false, required: true
  private _predicate = new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(this, "predicate");
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate) {
    this._predicate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }

  // resource_selector - computed: false, optional: false, required: true
  private _resourceSelector = new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(this, "resource_selector");
  public get resourceSelector() {
    return this._resourceSelector;
  }
  public putResourceSelector(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector) {
    this._resourceSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorInput() {
    return this._resourceSelector.internalValue;
  }
}
export interface SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#create SccManagementOrganizationSecurityHealthAnalyticsCustomModule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#delete SccManagementOrganizationSecurityHealthAnalyticsCustomModule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#update SccManagementOrganizationSecurityHealthAnalyticsCustomModule#update}
  */
  readonly update?: string;
}

export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsToTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts | cdktn.IResolvable): any {
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


export function sccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsToHclTerraform(struct?: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts | cdktn.IResolvable): any {
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

export class SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module google_scc_management_organization_security_health_analytics_custom_module}
*/
export class SccManagementOrganizationSecurityHealthAnalyticsCustomModule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_scc_management_organization_security_health_analytics_custom_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SccManagementOrganizationSecurityHealthAnalyticsCustomModule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SccManagementOrganizationSecurityHealthAnalyticsCustomModule to import
  * @param importFromId The id of the existing SccManagementOrganizationSecurityHealthAnalyticsCustomModule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SccManagementOrganizationSecurityHealthAnalyticsCustomModule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_scc_management_organization_security_health_analytics_custom_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/scc_management_organization_security_health_analytics_custom_module google_scc_management_organization_security_health_analytics_custom_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig
  */
  public constructor(scope: Construct, id: string, config: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_scc_management_organization_security_health_analytics_custom_module',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.33.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._enablementState = config.enablementState;
    this._id = config.id;
    this._location = config.location;
    this._organization = config.organization;
    this._customConfig.internalValue = config.customConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ancestor_module - computed: true, optional: false, required: false
  public get ancestorModule() {
    return this.getStringAttribute('ancestor_module');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enablement_state - computed: false, optional: true, required: false
  private _enablementState?: string; 
  public get enablementState() {
    return this.getStringAttribute('enablement_state');
  }
  public set enablementState(value: string) {
    this._enablementState = value;
  }
  public resetEnablementState() {
    this._enablementState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablementStateInput() {
    return this._enablementState;
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

  // last_editor - computed: true, optional: false, required: false
  public get lastEditor() {
    return this.getStringAttribute('last_editor');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_config - computed: false, optional: true, required: false
  private _customConfig = new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(this, "custom_config");
  public get customConfig() {
    return this._customConfig;
  }
  public putCustomConfig(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig) {
    this._customConfig.internalValue = value;
  }
  public resetCustomConfig() {
    this._customConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      enablement_state: cdktn.stringToTerraform(this._enablementState),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      organization: cdktn.stringToTerraform(this._organization),
      custom_config: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigToTerraform(this._customConfig.internalValue),
      timeouts: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enablement_state: {
        value: cdktn.stringToHclTerraform(this._enablementState),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktn.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_config: {
        value: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigToHclTerraform(this._customConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigList",
      },
      timeouts: {
        value: sccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
