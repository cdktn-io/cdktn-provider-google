/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BeyondcorpSecurityGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#deletion_policy BeyondcorpSecurityGateway#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. An arbitrary user-provided name for the SecurityGateway.
  * Cannot exceed 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#display_name BeyondcorpSecurityGateway#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#location BeyondcorpSecurityGateway#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}
  */
  readonly project?: string;
  /**
  * Optional. User-settable SecurityGateway resource ID.
  * * Must start with a letter.
  * * Must contain between 4-63 characters from '/a-z-/'.
  * * Must end with a number or letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#security_gateway_id BeyondcorpSecurityGateway#security_gateway_id}
  */
  readonly securityGatewayId: string;
  /**
  * hubs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#hubs BeyondcorpSecurityGateway#hubs}
  */
  readonly hubs?: BeyondcorpSecurityGatewayHubs[] | cdktn.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#logging BeyondcorpSecurityGateway#logging}
  */
  readonly logging?: BeyondcorpSecurityGatewayLogging;
  /**
  * proxy_protocol_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#proxy_protocol_config BeyondcorpSecurityGateway#proxy_protocol_config}
  */
  readonly proxyProtocolConfig?: BeyondcorpSecurityGatewayProxyProtocolConfig;
  /**
  * service_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#service_discovery BeyondcorpSecurityGateway#service_discovery}
  */
  readonly serviceDiscovery?: BeyondcorpSecurityGatewayServiceDiscovery;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#timeouts BeyondcorpSecurityGateway#timeouts}
  */
  readonly timeouts?: BeyondcorpSecurityGatewayTimeouts;
}
export interface BeyondcorpSecurityGatewayHubsInternetGateway {
}

export function beyondcorpSecurityGatewayHubsInternetGatewayToTerraform(struct?: BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference | BeyondcorpSecurityGatewayHubsInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function beyondcorpSecurityGatewayHubsInternetGatewayToHclTerraform(struct?: BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference | BeyondcorpSecurityGatewayHubsInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayHubsInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayHubsInternetGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_ips - computed: true, optional: false, required: false
  public get assignedIps() {
    return this.getListAttribute('assigned_ips');
  }
}
export interface BeyondcorpSecurityGatewayHubs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#region BeyondcorpSecurityGateway#region}
  */
  readonly region: string;
  /**
  * internet_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#internet_gateway BeyondcorpSecurityGateway#internet_gateway}
  */
  readonly internetGateway?: BeyondcorpSecurityGatewayHubsInternetGateway;
}

export function beyondcorpSecurityGatewayHubsToTerraform(struct?: BeyondcorpSecurityGatewayHubs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    internet_gateway: beyondcorpSecurityGatewayHubsInternetGatewayToTerraform(struct!.internetGateway),
  }
}


export function beyondcorpSecurityGatewayHubsToHclTerraform(struct?: BeyondcorpSecurityGatewayHubs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_gateway: {
      value: beyondcorpSecurityGatewayHubsInternetGatewayToHclTerraform(struct!.internetGateway),
      isBlock: true,
      type: "list",
      storageClassType: "BeyondcorpSecurityGatewayHubsInternetGatewayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpSecurityGatewayHubsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BeyondcorpSecurityGatewayHubs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._internetGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetGateway = this._internetGateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayHubs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._internetGateway.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._internetGateway.internalValue = value.internetGateway;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // internet_gateway - computed: false, optional: true, required: false
  private _internetGateway = new BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(this, "internet_gateway");
  public get internetGateway() {
    return this._internetGateway;
  }
  public putInternetGateway(value: BeyondcorpSecurityGatewayHubsInternetGateway) {
    this._internetGateway.internalValue = value;
  }
  public resetInternetGateway() {
    this._internetGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayInput() {
    return this._internetGateway.internalValue;
  }
}

export class BeyondcorpSecurityGatewayHubsList extends cdktn.ComplexList {
  public internalValue? : BeyondcorpSecurityGatewayHubs[] | cdktn.IResolvable

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
  public get(index: number): BeyondcorpSecurityGatewayHubsOutputReference {
    return new BeyondcorpSecurityGatewayHubsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BeyondcorpSecurityGatewayLogging {
}

export function beyondcorpSecurityGatewayLoggingToTerraform(struct?: BeyondcorpSecurityGatewayLoggingOutputReference | BeyondcorpSecurityGatewayLogging): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function beyondcorpSecurityGatewayLoggingToHclTerraform(struct?: BeyondcorpSecurityGatewayLoggingOutputReference | BeyondcorpSecurityGatewayLogging): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BeyondcorpSecurityGatewayLoggingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo {
  /**
  * The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}
  */
  readonly outputType?: string;
}

export function beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoToTerraform(struct?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference | BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_type: cdktn.stringToTerraform(struct!.outputType),
  }
}


export function beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoToHclTerraform(struct?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference | BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputType = value.outputType;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }
}
export interface BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo {
  /**
  * The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}
  */
  readonly outputType?: string;
}

export function beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoToTerraform(struct?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference | BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_type: cdktn.stringToTerraform(struct!.outputType),
  }
}


export function beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoToHclTerraform(struct?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference | BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputType = value.outputType;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }
}
export interface BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo {
  /**
  * The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}
  */
  readonly outputType?: string;
}

export function beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoToTerraform(struct?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference | BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_type: cdktn.stringToTerraform(struct!.outputType),
  }
}


export function beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoToHclTerraform(struct?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference | BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputType = value.outputType;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }
}
export interface BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders {
  /**
  * Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}
  */
  readonly outputType?: string;
  /**
  * device_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#device_info BeyondcorpSecurityGateway#device_info}
  */
  readonly deviceInfo?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo;
  /**
  * group_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#group_info BeyondcorpSecurityGateway#group_info}
  */
  readonly groupInfo?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo;
  /**
  * user_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#user_info BeyondcorpSecurityGateway#user_info}
  */
  readonly userInfo?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo;
}

export function beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersToTerraform(struct?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference | BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_type: cdktn.stringToTerraform(struct!.outputType),
    device_info: beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoToTerraform(struct!.deviceInfo),
    group_info: beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoToTerraform(struct!.groupInfo),
    user_info: beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoToTerraform(struct!.userInfo),
  }
}


export function beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersToHclTerraform(struct?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference | BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_info: {
      value: beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoToHclTerraform(struct!.deviceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList",
    },
    group_info: {
      value: beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoToHclTerraform(struct!.groupInfo),
      isBlock: true,
      type: "list",
      storageClassType: "BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList",
    },
    user_info: {
      value: beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoToHclTerraform(struct!.userInfo),
      isBlock: true,
      type: "list",
      storageClassType: "BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._deviceInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceInfo = this._deviceInfo?.internalValue;
    }
    if (this._groupInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInfo = this._groupInfo?.internalValue;
    }
    if (this._userInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfo = this._userInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputType = undefined;
      this._deviceInfo.internalValue = undefined;
      this._groupInfo.internalValue = undefined;
      this._userInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputType = value.outputType;
      this._deviceInfo.internalValue = value.deviceInfo;
      this._groupInfo.internalValue = value.groupInfo;
      this._userInfo.internalValue = value.userInfo;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // device_info - computed: false, optional: true, required: false
  private _deviceInfo = new BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference(this, "device_info");
  public get deviceInfo() {
    return this._deviceInfo;
  }
  public putDeviceInfo(value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo) {
    this._deviceInfo.internalValue = value;
  }
  public resetDeviceInfo() {
    this._deviceInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInfoInput() {
    return this._deviceInfo.internalValue;
  }

  // group_info - computed: false, optional: true, required: false
  private _groupInfo = new BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference(this, "group_info");
  public get groupInfo() {
    return this._groupInfo;
  }
  public putGroupInfo(value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo) {
    this._groupInfo.internalValue = value;
  }
  public resetGroupInfo() {
    this._groupInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInfoInput() {
    return this._groupInfo.internalValue;
  }

  // user_info - computed: false, optional: true, required: false
  private _userInfo = new BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference(this, "user_info");
  public get userInfo() {
    return this._userInfo;
  }
  public putUserInfo(value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo) {
    this._userInfo.internalValue = value;
  }
  public resetUserInfo() {
    this._userInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoInput() {
    return this._userInfo.internalValue;
  }
}
export interface BeyondcorpSecurityGatewayProxyProtocolConfig {
  /**
  * The configuration for the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#allowed_client_headers BeyondcorpSecurityGateway#allowed_client_headers}
  */
  readonly allowedClientHeaders?: string[];
  /**
  * Client IP configuration. The client IP address is included if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#client_ip BeyondcorpSecurityGateway#client_ip}
  */
  readonly clientIp?: boolean | cdktn.IResolvable;
  /**
  * Gateway identity configuration. Possible values: ["RESOURCE_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#gateway_identity BeyondcorpSecurityGateway#gateway_identity}
  */
  readonly gatewayIdentity?: string;
  /**
  * Custom resource specific headers along with the values.
  * The names should conform to RFC 9110:
  * > Field names SHOULD constrain themselves to alphanumeric characters, "-",
  *   and ".", and SHOULD begin with a letter.
  * > Field values SHOULD contain only ASCII printable characters and tab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#metadata_headers BeyondcorpSecurityGateway#metadata_headers}
  */
  readonly metadataHeaders?: { [key: string]: string };
  /**
  * contextual_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#contextual_headers BeyondcorpSecurityGateway#contextual_headers}
  */
  readonly contextualHeaders?: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders;
}

export function beyondcorpSecurityGatewayProxyProtocolConfigToTerraform(struct?: BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference | BeyondcorpSecurityGatewayProxyProtocolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_client_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClientHeaders),
    client_ip: cdktn.booleanToTerraform(struct!.clientIp),
    gateway_identity: cdktn.stringToTerraform(struct!.gatewayIdentity),
    metadata_headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadataHeaders),
    contextual_headers: beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersToTerraform(struct!.contextualHeaders),
  }
}


export function beyondcorpSecurityGatewayProxyProtocolConfigToHclTerraform(struct?: BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference | BeyondcorpSecurityGatewayProxyProtocolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_client_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedClientHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_ip: {
      value: cdktn.booleanToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_identity: {
      value: cdktn.stringToHclTerraform(struct!.gatewayIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadataHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    contextual_headers: {
      value: beyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersToHclTerraform(struct!.contextualHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayProxyProtocolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClientHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClientHeaders = this._allowedClientHeaders;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._gatewayIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIdentity = this._gatewayIdentity;
    }
    if (this._metadataHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataHeaders = this._metadataHeaders;
    }
    if (this._contextualHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextualHeaders = this._contextualHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayProxyProtocolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedClientHeaders = undefined;
      this._clientIp = undefined;
      this._gatewayIdentity = undefined;
      this._metadataHeaders = undefined;
      this._contextualHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedClientHeaders = value.allowedClientHeaders;
      this._clientIp = value.clientIp;
      this._gatewayIdentity = value.gatewayIdentity;
      this._metadataHeaders = value.metadataHeaders;
      this._contextualHeaders.internalValue = value.contextualHeaders;
    }
  }

  // allowed_client_headers - computed: false, optional: true, required: false
  private _allowedClientHeaders?: string[]; 
  public get allowedClientHeaders() {
    return this.getListAttribute('allowed_client_headers');
  }
  public set allowedClientHeaders(value: string[]) {
    this._allowedClientHeaders = value;
  }
  public resetAllowedClientHeaders() {
    this._allowedClientHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientHeadersInput() {
    return this._allowedClientHeaders;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: boolean | cdktn.IResolvable; 
  public get clientIp() {
    return this.getBooleanAttribute('client_ip');
  }
  public set clientIp(value: boolean | cdktn.IResolvable) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // gateway_identity - computed: false, optional: true, required: false
  private _gatewayIdentity?: string; 
  public get gatewayIdentity() {
    return this.getStringAttribute('gateway_identity');
  }
  public set gatewayIdentity(value: string) {
    this._gatewayIdentity = value;
  }
  public resetGatewayIdentity() {
    this._gatewayIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdentityInput() {
    return this._gatewayIdentity;
  }

  // metadata_headers - computed: false, optional: true, required: false
  private _metadataHeaders?: { [key: string]: string }; 
  public get metadataHeaders() {
    return this.getStringMapAttribute('metadata_headers');
  }
  public set metadataHeaders(value: { [key: string]: string }) {
    this._metadataHeaders = value;
  }
  public resetMetadataHeaders() {
    this._metadataHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataHeadersInput() {
    return this._metadataHeaders;
  }

  // contextual_headers - computed: false, optional: true, required: false
  private _contextualHeaders = new BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference(this, "contextual_headers");
  public get contextualHeaders() {
    return this._contextualHeaders;
  }
  public putContextualHeaders(value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders) {
    this._contextualHeaders.internalValue = value;
  }
  public resetContextualHeaders() {
    this._contextualHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextualHeadersInput() {
    return this._contextualHeaders.internalValue;
  }
}
export interface BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride {
  /**
  * Contains uri path fragment where HTTP request is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#path BeyondcorpSecurityGateway#path}
  */
  readonly path?: string;
}

export function beyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideToTerraform(struct?: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference | BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function beyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideToHclTerraform(struct?: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference | BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface BeyondcorpSecurityGatewayServiceDiscoveryApiGateway {
  /**
  * resource_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#resource_override BeyondcorpSecurityGateway#resource_override}
  */
  readonly resourceOverride?: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride;
}

export function beyondcorpSecurityGatewayServiceDiscoveryApiGatewayToTerraform(struct?: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference | BeyondcorpSecurityGatewayServiceDiscoveryApiGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_override: beyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideToTerraform(struct!.resourceOverride),
  }
}


export function beyondcorpSecurityGatewayServiceDiscoveryApiGatewayToHclTerraform(struct?: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference | BeyondcorpSecurityGatewayServiceDiscoveryApiGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_override: {
      value: beyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideToHclTerraform(struct!.resourceOverride),
      isBlock: true,
      type: "list",
      storageClassType: "BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayServiceDiscoveryApiGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceOverride = this._resourceOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayServiceDiscoveryApiGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceOverride.internalValue = value.resourceOverride;
    }
  }

  // resource_override - computed: false, optional: true, required: false
  private _resourceOverride = new BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference(this, "resource_override");
  public get resourceOverride() {
    return this._resourceOverride;
  }
  public putResourceOverride(value: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride) {
    this._resourceOverride.internalValue = value;
  }
  public resetResourceOverride() {
    this._resourceOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOverrideInput() {
    return this._resourceOverride.internalValue;
  }
}
export interface BeyondcorpSecurityGatewayServiceDiscovery {
  /**
  * api_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#api_gateway BeyondcorpSecurityGateway#api_gateway}
  */
  readonly apiGateway?: BeyondcorpSecurityGatewayServiceDiscoveryApiGateway;
}

export function beyondcorpSecurityGatewayServiceDiscoveryToTerraform(struct?: BeyondcorpSecurityGatewayServiceDiscoveryOutputReference | BeyondcorpSecurityGatewayServiceDiscovery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_gateway: beyondcorpSecurityGatewayServiceDiscoveryApiGatewayToTerraform(struct!.apiGateway),
  }
}


export function beyondcorpSecurityGatewayServiceDiscoveryToHclTerraform(struct?: BeyondcorpSecurityGatewayServiceDiscoveryOutputReference | BeyondcorpSecurityGatewayServiceDiscovery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_gateway: {
      value: beyondcorpSecurityGatewayServiceDiscoveryApiGatewayToHclTerraform(struct!.apiGateway),
      isBlock: true,
      type: "list",
      storageClassType: "BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BeyondcorpSecurityGatewayServiceDiscoveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BeyondcorpSecurityGatewayServiceDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGateway = this._apiGateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BeyondcorpSecurityGatewayServiceDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiGateway.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiGateway.internalValue = value.apiGateway;
    }
  }

  // api_gateway - computed: false, optional: true, required: false
  private _apiGateway = new BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference(this, "api_gateway");
  public get apiGateway() {
    return this._apiGateway;
  }
  public putApiGateway(value: BeyondcorpSecurityGatewayServiceDiscoveryApiGateway) {
    this._apiGateway.internalValue = value;
  }
  public resetApiGateway() {
    this._apiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayInput() {
    return this._apiGateway.internalValue;
  }
}
export interface BeyondcorpSecurityGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}
  */
  readonly update?: string;
}

export function beyondcorpSecurityGatewayTimeoutsToTerraform(struct?: BeyondcorpSecurityGatewayTimeouts | cdktn.IResolvable): any {
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


export function beyondcorpSecurityGatewayTimeoutsToHclTerraform(struct?: BeyondcorpSecurityGatewayTimeouts | cdktn.IResolvable): any {
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

export class BeyondcorpSecurityGatewayTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BeyondcorpSecurityGatewayTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BeyondcorpSecurityGatewayTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway google_beyondcorp_security_gateway}
*/
export class BeyondcorpSecurityGateway extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_beyondcorp_security_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BeyondcorpSecurityGateway to import
  * @param importFromId The id of the existing BeyondcorpSecurityGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BeyondcorpSecurityGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_beyondcorp_security_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/beyondcorp_security_gateway google_beyondcorp_security_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BeyondcorpSecurityGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: BeyondcorpSecurityGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'google_beyondcorp_security_gateway',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._securityGatewayId = config.securityGatewayId;
    this._hubs.internalValue = config.hubs;
    this._logging.internalValue = config.logging;
    this._proxyProtocolConfig.internalValue = config.proxyProtocolConfig;
    this._serviceDiscovery.internalValue = config.serviceDiscovery;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delegating_service_account - computed: true, optional: false, required: false
  public get delegatingServiceAccount() {
    return this.getStringAttribute('delegating_service_account');
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

  // external_ips - computed: true, optional: false, required: false
  public get externalIps() {
    return this.getListAttribute('external_ips');
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

  // security_gateway_id - computed: false, optional: false, required: true
  private _securityGatewayId?: string; 
  public get securityGatewayId() {
    return this.getStringAttribute('security_gateway_id');
  }
  public set securityGatewayId(value: string) {
    this._securityGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGatewayIdInput() {
    return this._securityGatewayId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // hubs - computed: false, optional: true, required: false
  private _hubs = new BeyondcorpSecurityGatewayHubsList(this, "hubs", true);
  public get hubs() {
    return this._hubs;
  }
  public putHubs(value: BeyondcorpSecurityGatewayHubs[] | cdktn.IResolvable) {
    this._hubs.internalValue = value;
  }
  public resetHubs() {
    this._hubs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubsInput() {
    return this._hubs.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new BeyondcorpSecurityGatewayLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: BeyondcorpSecurityGatewayLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // proxy_protocol_config - computed: false, optional: true, required: false
  private _proxyProtocolConfig = new BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference(this, "proxy_protocol_config");
  public get proxyProtocolConfig() {
    return this._proxyProtocolConfig;
  }
  public putProxyProtocolConfig(value: BeyondcorpSecurityGatewayProxyProtocolConfig) {
    this._proxyProtocolConfig.internalValue = value;
  }
  public resetProxyProtocolConfig() {
    this._proxyProtocolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolConfigInput() {
    return this._proxyProtocolConfig.internalValue;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery = new BeyondcorpSecurityGatewayServiceDiscoveryOutputReference(this, "service_discovery");
  public get serviceDiscovery() {
    return this._serviceDiscovery;
  }
  public putServiceDiscovery(value: BeyondcorpSecurityGatewayServiceDiscovery) {
    this._serviceDiscovery.internalValue = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BeyondcorpSecurityGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BeyondcorpSecurityGatewayTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      security_gateway_id: cdktn.stringToTerraform(this._securityGatewayId),
      hubs: cdktn.listMapper(beyondcorpSecurityGatewayHubsToTerraform, true)(this._hubs.internalValue),
      logging: beyondcorpSecurityGatewayLoggingToTerraform(this._logging.internalValue),
      proxy_protocol_config: beyondcorpSecurityGatewayProxyProtocolConfigToTerraform(this._proxyProtocolConfig.internalValue),
      service_discovery: beyondcorpSecurityGatewayServiceDiscoveryToTerraform(this._serviceDiscovery.internalValue),
      timeouts: beyondcorpSecurityGatewayTimeoutsToTerraform(this._timeouts.internalValue),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_gateway_id: {
        value: cdktn.stringToHclTerraform(this._securityGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hubs: {
        value: cdktn.listMapperHcl(beyondcorpSecurityGatewayHubsToHclTerraform, true)(this._hubs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BeyondcorpSecurityGatewayHubsList",
      },
      logging: {
        value: beyondcorpSecurityGatewayLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BeyondcorpSecurityGatewayLoggingList",
      },
      proxy_protocol_config: {
        value: beyondcorpSecurityGatewayProxyProtocolConfigToHclTerraform(this._proxyProtocolConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BeyondcorpSecurityGatewayProxyProtocolConfigList",
      },
      service_discovery: {
        value: beyondcorpSecurityGatewayServiceDiscoveryToHclTerraform(this._serviceDiscovery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BeyondcorpSecurityGatewayServiceDiscoveryList",
      },
      timeouts: {
        value: beyondcorpSecurityGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BeyondcorpSecurityGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
