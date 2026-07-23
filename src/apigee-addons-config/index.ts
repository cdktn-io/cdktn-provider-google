/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApigeeAddonsConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#deletion_policy ApigeeAddonsConfig#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#id ApigeeAddonsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Apigee organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#org ApigeeAddonsConfig#org}
  */
  readonly org: string;
  /**
  * addons_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#addons_config ApigeeAddonsConfig#addons_config}
  */
  readonly addonsConfig?: ApigeeAddonsConfigAddonsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#timeouts ApigeeAddonsConfig#timeouts}
  */
  readonly timeouts?: ApigeeAddonsConfigTimeouts;
}
export interface ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig {
  /**
  * Flag that specifies whether the Advanced API Ops add-on is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function apigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigToTerraform(struct?: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference | ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function apigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigToHclTerraform(struct?: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference | ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ApigeeAddonsConfigAddonsConfigApiSecurityConfig {
  /**
  * Flag that specifies whether the API security add-on is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function apigeeAddonsConfigAddonsConfigApiSecurityConfigToTerraform(struct?: ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference | ApigeeAddonsConfigAddonsConfigApiSecurityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function apigeeAddonsConfigAddonsConfigApiSecurityConfigToHclTerraform(struct?: ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference | ApigeeAddonsConfigAddonsConfigApiSecurityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeAddonsConfigAddonsConfigApiSecurityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeAddonsConfigAddonsConfigApiSecurityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
}
export interface ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig {
  /**
  * Flag that specifies whether the Connectors Platform add-on is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function apigeeAddonsConfigAddonsConfigConnectorsPlatformConfigToTerraform(struct?: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference | ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function apigeeAddonsConfigAddonsConfigConnectorsPlatformConfigToHclTerraform(struct?: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference | ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
}
export interface ApigeeAddonsConfigAddonsConfigIntegrationConfig {
  /**
  * Flag that specifies whether the Integration add-on is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function apigeeAddonsConfigAddonsConfigIntegrationConfigToTerraform(struct?: ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference | ApigeeAddonsConfigAddonsConfigIntegrationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function apigeeAddonsConfigAddonsConfigIntegrationConfigToHclTerraform(struct?: ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference | ApigeeAddonsConfigAddonsConfigIntegrationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeAddonsConfigAddonsConfigIntegrationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeAddonsConfigAddonsConfigIntegrationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ApigeeAddonsConfigAddonsConfigMonetizationConfig {
  /**
  * Flag that specifies whether the Monetization add-on is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function apigeeAddonsConfigAddonsConfigMonetizationConfigToTerraform(struct?: ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference | ApigeeAddonsConfigAddonsConfigMonetizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function apigeeAddonsConfigAddonsConfigMonetizationConfigToHclTerraform(struct?: ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference | ApigeeAddonsConfigAddonsConfigMonetizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeAddonsConfigAddonsConfigMonetizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeAddonsConfigAddonsConfigMonetizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ApigeeAddonsConfigAddonsConfig {
  /**
  * advanced_api_ops_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#advanced_api_ops_config ApigeeAddonsConfig#advanced_api_ops_config}
  */
  readonly advancedApiOpsConfig?: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig;
  /**
  * api_security_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#api_security_config ApigeeAddonsConfig#api_security_config}
  */
  readonly apiSecurityConfig?: ApigeeAddonsConfigAddonsConfigApiSecurityConfig;
  /**
  * connectors_platform_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#connectors_platform_config ApigeeAddonsConfig#connectors_platform_config}
  */
  readonly connectorsPlatformConfig?: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig;
  /**
  * integration_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#integration_config ApigeeAddonsConfig#integration_config}
  */
  readonly integrationConfig?: ApigeeAddonsConfigAddonsConfigIntegrationConfig;
  /**
  * monetization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#monetization_config ApigeeAddonsConfig#monetization_config}
  */
  readonly monetizationConfig?: ApigeeAddonsConfigAddonsConfigMonetizationConfig;
}

export function apigeeAddonsConfigAddonsConfigToTerraform(struct?: ApigeeAddonsConfigAddonsConfigOutputReference | ApigeeAddonsConfigAddonsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    advanced_api_ops_config: apigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigToTerraform(struct!.advancedApiOpsConfig),
    api_security_config: apigeeAddonsConfigAddonsConfigApiSecurityConfigToTerraform(struct!.apiSecurityConfig),
    connectors_platform_config: apigeeAddonsConfigAddonsConfigConnectorsPlatformConfigToTerraform(struct!.connectorsPlatformConfig),
    integration_config: apigeeAddonsConfigAddonsConfigIntegrationConfigToTerraform(struct!.integrationConfig),
    monetization_config: apigeeAddonsConfigAddonsConfigMonetizationConfigToTerraform(struct!.monetizationConfig),
  }
}


export function apigeeAddonsConfigAddonsConfigToHclTerraform(struct?: ApigeeAddonsConfigAddonsConfigOutputReference | ApigeeAddonsConfigAddonsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    advanced_api_ops_config: {
      value: apigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigToHclTerraform(struct!.advancedApiOpsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigList",
    },
    api_security_config: {
      value: apigeeAddonsConfigAddonsConfigApiSecurityConfigToHclTerraform(struct!.apiSecurityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApigeeAddonsConfigAddonsConfigApiSecurityConfigList",
    },
    connectors_platform_config: {
      value: apigeeAddonsConfigAddonsConfigConnectorsPlatformConfigToHclTerraform(struct!.connectorsPlatformConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigList",
    },
    integration_config: {
      value: apigeeAddonsConfigAddonsConfigIntegrationConfigToHclTerraform(struct!.integrationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApigeeAddonsConfigAddonsConfigIntegrationConfigList",
    },
    monetization_config: {
      value: apigeeAddonsConfigAddonsConfigMonetizationConfigToHclTerraform(struct!.monetizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApigeeAddonsConfigAddonsConfigMonetizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeAddonsConfigAddonsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeAddonsConfigAddonsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedApiOpsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedApiOpsConfig = this._advancedApiOpsConfig?.internalValue;
    }
    if (this._apiSecurityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecurityConfig = this._apiSecurityConfig?.internalValue;
    }
    if (this._connectorsPlatformConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorsPlatformConfig = this._connectorsPlatformConfig?.internalValue;
    }
    if (this._integrationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationConfig = this._integrationConfig?.internalValue;
    }
    if (this._monetizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monetizationConfig = this._monetizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeAddonsConfigAddonsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedApiOpsConfig.internalValue = undefined;
      this._apiSecurityConfig.internalValue = undefined;
      this._connectorsPlatformConfig.internalValue = undefined;
      this._integrationConfig.internalValue = undefined;
      this._monetizationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedApiOpsConfig.internalValue = value.advancedApiOpsConfig;
      this._apiSecurityConfig.internalValue = value.apiSecurityConfig;
      this._connectorsPlatformConfig.internalValue = value.connectorsPlatformConfig;
      this._integrationConfig.internalValue = value.integrationConfig;
      this._monetizationConfig.internalValue = value.monetizationConfig;
    }
  }

  // advanced_api_ops_config - computed: false, optional: true, required: false
  private _advancedApiOpsConfig = new ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference(this, "advanced_api_ops_config");
  public get advancedApiOpsConfig() {
    return this._advancedApiOpsConfig;
  }
  public putAdvancedApiOpsConfig(value: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig) {
    this._advancedApiOpsConfig.internalValue = value;
  }
  public resetAdvancedApiOpsConfig() {
    this._advancedApiOpsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedApiOpsConfigInput() {
    return this._advancedApiOpsConfig.internalValue;
  }

  // api_security_config - computed: false, optional: true, required: false
  private _apiSecurityConfig = new ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference(this, "api_security_config");
  public get apiSecurityConfig() {
    return this._apiSecurityConfig;
  }
  public putApiSecurityConfig(value: ApigeeAddonsConfigAddonsConfigApiSecurityConfig) {
    this._apiSecurityConfig.internalValue = value;
  }
  public resetApiSecurityConfig() {
    this._apiSecurityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecurityConfigInput() {
    return this._apiSecurityConfig.internalValue;
  }

  // connectors_platform_config - computed: false, optional: true, required: false
  private _connectorsPlatformConfig = new ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference(this, "connectors_platform_config");
  public get connectorsPlatformConfig() {
    return this._connectorsPlatformConfig;
  }
  public putConnectorsPlatformConfig(value: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig) {
    this._connectorsPlatformConfig.internalValue = value;
  }
  public resetConnectorsPlatformConfig() {
    this._connectorsPlatformConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorsPlatformConfigInput() {
    return this._connectorsPlatformConfig.internalValue;
  }

  // integration_config - computed: false, optional: true, required: false
  private _integrationConfig = new ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference(this, "integration_config");
  public get integrationConfig() {
    return this._integrationConfig;
  }
  public putIntegrationConfig(value: ApigeeAddonsConfigAddonsConfigIntegrationConfig) {
    this._integrationConfig.internalValue = value;
  }
  public resetIntegrationConfig() {
    this._integrationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationConfigInput() {
    return this._integrationConfig.internalValue;
  }

  // monetization_config - computed: false, optional: true, required: false
  private _monetizationConfig = new ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference(this, "monetization_config");
  public get monetizationConfig() {
    return this._monetizationConfig;
  }
  public putMonetizationConfig(value: ApigeeAddonsConfigAddonsConfigMonetizationConfig) {
    this._monetizationConfig.internalValue = value;
  }
  public resetMonetizationConfig() {
    this._monetizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monetizationConfigInput() {
    return this._monetizationConfig.internalValue;
  }
}
export interface ApigeeAddonsConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#create ApigeeAddonsConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#delete ApigeeAddonsConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#update ApigeeAddonsConfig#update}
  */
  readonly update?: string;
}

export function apigeeAddonsConfigTimeoutsToTerraform(struct?: ApigeeAddonsConfigTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function apigeeAddonsConfigTimeoutsToHclTerraform(struct?: ApigeeAddonsConfigTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ApigeeAddonsConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeAddonsConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApigeeAddonsConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config google_apigee_addons_config}
*/
export class ApigeeAddonsConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_addons_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApigeeAddonsConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeAddonsConfig to import
  * @param importFromId The id of the existing ApigeeAddonsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeAddonsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_addons_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config google_apigee_addons_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeAddonsConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeAddonsConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_addons_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.41.0',
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
    this._id = config.id;
    this._org = config.org;
    this._addonsConfig.internalValue = config.addonsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // addons_config - computed: false, optional: true, required: false
  private _addonsConfig = new ApigeeAddonsConfigAddonsConfigOutputReference(this, "addons_config");
  public get addonsConfig() {
    return this._addonsConfig;
  }
  public putAddonsConfig(value: ApigeeAddonsConfigAddonsConfig) {
    this._addonsConfig.internalValue = value;
  }
  public resetAddonsConfig() {
    this._addonsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsConfigInput() {
    return this._addonsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeAddonsConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeAddonsConfigTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      org: cdktn.stringToTerraform(this._org),
      addons_config: apigeeAddonsConfigAddonsConfigToTerraform(this._addonsConfig.internalValue),
      timeouts: apigeeAddonsConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktn.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addons_config: {
        value: apigeeAddonsConfigAddonsConfigToHclTerraform(this._addonsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigeeAddonsConfigAddonsConfigList",
      },
      timeouts: {
        value: apigeeAddonsConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigeeAddonsConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
