/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkServicesLbEdgeExtensionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#deletion_policy NetworkServicesLbEdgeExtension#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A human-readable description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#description NetworkServicesLbEdgeExtension#description}
  */
  readonly description?: string;
  /**
  * A list of references to the forwarding rules to which this service extension is attached.
  * At least one forwarding rule is required. Only one LbEdgeExtension resource can be associated with a forwarding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#forwarding_rules NetworkServicesLbEdgeExtension#forwarding_rules}
  */
  readonly forwardingRules: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#id NetworkServicesLbEdgeExtension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of labels associated with the LbEdgeExtension resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#labels NetworkServicesLbEdgeExtension#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * All forwarding rules referenced by this extension must share the same load balancing scheme. Possible values: ["EXTERNAL_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#load_balancing_scheme NetworkServicesLbEdgeExtension#load_balancing_scheme}
  */
  readonly loadBalancingScheme: string;
  /**
  * The location of the edge extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#location NetworkServicesLbEdgeExtension#location}
  */
  readonly location: string;
  /**
  * Name of the LbEdgeExtension resource in the following format: projects/{project}/locations/{location}/lbEdgeExtensions/{lbEdgeExtensions}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#name NetworkServicesLbEdgeExtension#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#project NetworkServicesLbEdgeExtension#project}
  */
  readonly project?: string;
  /**
  * extension_chains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#extension_chains NetworkServicesLbEdgeExtension#extension_chains}
  */
  readonly extensionChains: NetworkServicesLbEdgeExtensionExtensionChains[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#timeouts NetworkServicesLbEdgeExtension#timeouts}
  */
  readonly timeouts?: NetworkServicesLbEdgeExtensionTimeouts;
}
export interface NetworkServicesLbEdgeExtensionExtensionChainsExtensions {
  /**
  * Determines how the proxy behaves if the call to the extension fails or times out.
  * When set to TRUE, request or response processing continues without error.
  * Any subsequent extensions in the extension chain are also executed.
  * When set to FALSE: * If response headers have not been delivered to the downstream client,
  * a generic 500 error is returned to the client. The error response can be tailored by
  * configuring a custom error response in the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#fail_open NetworkServicesLbEdgeExtension#fail_open}
  */
  readonly failOpen?: boolean | cdktn.IResolvable;
  /**
  * List of the Envoy attributes to forward to the extension server. The attributes
  * provided here are included as part of the 'ProcessingRequest.attributes' field
  * (of type 'map'), where the keys are the attribute names. Refer to the
  * [documentation](https://docs.cloud.google.com/service-extensions/docs/attributes)
  * for the names of attributes that can be forwarded. If omitted, no attributes
  * are sent. Each element is a string indicating the attribute name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#forward_attributes NetworkServicesLbEdgeExtension#forward_attributes}
  */
  readonly forwardAttributes?: string[];
  /**
  * List of the HTTP headers to forward to the extension (from the client or backend).
  * If omitted, all headers are sent. Each element is a string indicating the header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#forward_headers NetworkServicesLbEdgeExtension#forward_headers}
  */
  readonly forwardHeaders?: string[];
  /**
  * The name for this extension. The name is logged as part of the HTTP request logs.
  * The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
  * and can have a maximum length of 63 characters. Additionally, the first character must be a letter
  * and the last a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#name NetworkServicesLbEdgeExtension#name}
  */
  readonly name: string;
  /**
  * The reference to the service that runs the extension.
  * 
  * * To configure a callout extension, service must be a fully-qualified reference to a backend service.
  * * To configure a plugin extension, service must be a reference to a WasmPlugin resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#service NetworkServicesLbEdgeExtension#service}
  */
  readonly service: string;
  /**
  * A set of events during request or response processing for which this extension is called.
  * This field is required for the LbEdgeExtension resource and only supports the value 'REQUEST_HEADERS'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#supported_events NetworkServicesLbEdgeExtension#supported_events}
  */
  readonly supportedEvents?: string[];
}

export function networkServicesLbEdgeExtensionExtensionChainsExtensionsToTerraform(struct?: NetworkServicesLbEdgeExtensionExtensionChainsExtensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fail_open: cdktn.booleanToTerraform(struct!.failOpen),
    forward_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.forwardAttributes),
    forward_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.forwardHeaders),
    name: cdktn.stringToTerraform(struct!.name),
    service: cdktn.stringToTerraform(struct!.service),
    supported_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedEvents),
  }
}


export function networkServicesLbEdgeExtensionExtensionChainsExtensionsToHclTerraform(struct?: NetworkServicesLbEdgeExtensionExtensionChainsExtensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fail_open: {
      value: cdktn.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_attributes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.forwardAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    forward_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.forwardHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkServicesLbEdgeExtensionExtensionChainsExtensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._forwardAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardAttributes = this._forwardAttributes;
    }
    if (this._forwardHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHeaders = this._forwardHeaders;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._supportedEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedEvents = this._supportedEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesLbEdgeExtensionExtensionChainsExtensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failOpen = undefined;
      this._forwardAttributes = undefined;
      this._forwardHeaders = undefined;
      this._name = undefined;
      this._service = undefined;
      this._supportedEvents = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failOpen = value.failOpen;
      this._forwardAttributes = value.forwardAttributes;
      this._forwardHeaders = value.forwardHeaders;
      this._name = value.name;
      this._service = value.service;
      this._supportedEvents = value.supportedEvents;
    }
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktn.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktn.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // forward_attributes - computed: false, optional: true, required: false
  private _forwardAttributes?: string[]; 
  public get forwardAttributes() {
    return this.getListAttribute('forward_attributes');
  }
  public set forwardAttributes(value: string[]) {
    this._forwardAttributes = value;
  }
  public resetForwardAttributes() {
    this._forwardAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardAttributesInput() {
    return this._forwardAttributes;
  }

  // forward_headers - computed: false, optional: true, required: false
  private _forwardHeaders?: string[]; 
  public get forwardHeaders() {
    return this.getListAttribute('forward_headers');
  }
  public set forwardHeaders(value: string[]) {
    this._forwardHeaders = value;
  }
  public resetForwardHeaders() {
    this._forwardHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHeadersInput() {
    return this._forwardHeaders;
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // supported_events - computed: false, optional: true, required: false
  private _supportedEvents?: string[]; 
  public get supportedEvents() {
    return this.getListAttribute('supported_events');
  }
  public set supportedEvents(value: string[]) {
    this._supportedEvents = value;
  }
  public resetSupportedEvents() {
    this._supportedEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedEventsInput() {
    return this._supportedEvents;
  }
}

export class NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList extends cdktn.ComplexList {
  public internalValue? : NetworkServicesLbEdgeExtensionExtensionChainsExtensions[] | cdktn.IResolvable

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
  public get(index: number): NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference {
    return new NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition {
  /**
  * A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#cel_expression NetworkServicesLbEdgeExtension#cel_expression}
  */
  readonly celExpression: string;
}

export function networkServicesLbEdgeExtensionExtensionChainsMatchConditionToTerraform(struct?: NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference | NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cel_expression: cdktn.stringToTerraform(struct!.celExpression),
  }
}


export function networkServicesLbEdgeExtensionExtensionChainsMatchConditionToHclTerraform(struct?: NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference | NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cel_expression: {
      value: cdktn.stringToHclTerraform(struct!.celExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._celExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.celExpression = this._celExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._celExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._celExpression = value.celExpression;
    }
  }

  // cel_expression - computed: false, optional: false, required: true
  private _celExpression?: string; 
  public get celExpression() {
    return this.getStringAttribute('cel_expression');
  }
  public set celExpression(value: string) {
    this._celExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get celExpressionInput() {
    return this._celExpression;
  }
}
export interface NetworkServicesLbEdgeExtensionExtensionChains {
  /**
  * The name for this extension chain. The name is logged as part of the HTTP request logs.
  * The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
  * and can have a maximum length of 63 characters. Additionally, the first character must be a letter
  * and the last character must be a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#name NetworkServicesLbEdgeExtension#name}
  */
  readonly name: string;
  /**
  * extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#extensions NetworkServicesLbEdgeExtension#extensions}
  */
  readonly extensions: NetworkServicesLbEdgeExtensionExtensionChainsExtensions[] | cdktn.IResolvable;
  /**
  * match_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#match_condition NetworkServicesLbEdgeExtension#match_condition}
  */
  readonly matchCondition: NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition;
}

export function networkServicesLbEdgeExtensionExtensionChainsToTerraform(struct?: NetworkServicesLbEdgeExtensionExtensionChains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    extensions: cdktn.listMapper(networkServicesLbEdgeExtensionExtensionChainsExtensionsToTerraform, true)(struct!.extensions),
    match_condition: networkServicesLbEdgeExtensionExtensionChainsMatchConditionToTerraform(struct!.matchCondition),
  }
}


export function networkServicesLbEdgeExtensionExtensionChainsToHclTerraform(struct?: NetworkServicesLbEdgeExtensionExtensionChains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extensions: {
      value: cdktn.listMapperHcl(networkServicesLbEdgeExtensionExtensionChainsExtensionsToHclTerraform, true)(struct!.extensions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList",
    },
    match_condition: {
      value: networkServicesLbEdgeExtensionExtensionChainsMatchConditionToHclTerraform(struct!.matchCondition),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesLbEdgeExtensionExtensionChainsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkServicesLbEdgeExtensionExtensionChains | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._matchCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCondition = this._matchCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesLbEdgeExtensionExtensionChains | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._extensions.internalValue = undefined;
      this._matchCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._extensions.internalValue = value.extensions;
      this._matchCondition.internalValue = value.matchCondition;
    }
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

  // extensions - computed: false, optional: false, required: true
  private _extensions = new NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList(this, "extensions", false);
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: NetworkServicesLbEdgeExtensionExtensionChainsExtensions[] | cdktn.IResolvable) {
    this._extensions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // match_condition - computed: false, optional: false, required: true
  private _matchCondition = new NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference(this, "match_condition");
  public get matchCondition() {
    return this._matchCondition;
  }
  public putMatchCondition(value: NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition) {
    this._matchCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionInput() {
    return this._matchCondition.internalValue;
  }
}

export class NetworkServicesLbEdgeExtensionExtensionChainsList extends cdktn.ComplexList {
  public internalValue? : NetworkServicesLbEdgeExtensionExtensionChains[] | cdktn.IResolvable

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
  public get(index: number): NetworkServicesLbEdgeExtensionExtensionChainsOutputReference {
    return new NetworkServicesLbEdgeExtensionExtensionChainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesLbEdgeExtensionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#create NetworkServicesLbEdgeExtension#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#delete NetworkServicesLbEdgeExtension#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#update NetworkServicesLbEdgeExtension#update}
  */
  readonly update?: string;
}

export function networkServicesLbEdgeExtensionTimeoutsToTerraform(struct?: NetworkServicesLbEdgeExtensionTimeouts | cdktn.IResolvable): any {
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


export function networkServicesLbEdgeExtensionTimeoutsToHclTerraform(struct?: NetworkServicesLbEdgeExtensionTimeouts | cdktn.IResolvable): any {
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

export class NetworkServicesLbEdgeExtensionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesLbEdgeExtensionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesLbEdgeExtensionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension google_network_services_lb_edge_extension}
*/
export class NetworkServicesLbEdgeExtension extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_lb_edge_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkServicesLbEdgeExtension resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesLbEdgeExtension to import
  * @param importFromId The id of the existing NetworkServicesLbEdgeExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesLbEdgeExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_lb_edge_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension google_network_services_lb_edge_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesLbEdgeExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesLbEdgeExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_lb_edge_extension',
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
    this._description = config.description;
    this._forwardingRules = config.forwardingRules;
    this._id = config.id;
    this._labels = config.labels;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._extensionChains.internalValue = config.extensionChains;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // forwarding_rules - computed: false, optional: false, required: true
  private _forwardingRules?: string[]; 
  public get forwardingRules() {
    return this.getListAttribute('forwarding_rules');
  }
  public set forwardingRules(value: string[]) {
    this._forwardingRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRulesInput() {
    return this._forwardingRules;
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

  // load_balancing_scheme - computed: false, optional: false, required: true
  private _loadBalancingScheme?: string; 
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string) {
    this._loadBalancingScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // extension_chains - computed: false, optional: false, required: true
  private _extensionChains = new NetworkServicesLbEdgeExtensionExtensionChainsList(this, "extension_chains", false);
  public get extensionChains() {
    return this._extensionChains;
  }
  public putExtensionChains(value: NetworkServicesLbEdgeExtensionExtensionChains[] | cdktn.IResolvable) {
    this._extensionChains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionChainsInput() {
    return this._extensionChains.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesLbEdgeExtensionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesLbEdgeExtensionTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      forwarding_rules: cdktn.listMapper(cdktn.stringToTerraform, false)(this._forwardingRules),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      load_balancing_scheme: cdktn.stringToTerraform(this._loadBalancingScheme),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      extension_chains: cdktn.listMapper(networkServicesLbEdgeExtensionExtensionChainsToTerraform, true)(this._extensionChains.internalValue),
      timeouts: networkServicesLbEdgeExtensionTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding_rules: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._forwardingRules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      load_balancing_scheme: {
        value: cdktn.stringToHclTerraform(this._loadBalancingScheme),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      extension_chains: {
        value: cdktn.listMapperHcl(networkServicesLbEdgeExtensionExtensionChainsToHclTerraform, true)(this._extensionChains.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesLbEdgeExtensionExtensionChainsList",
      },
      timeouts: {
        value: networkServicesLbEdgeExtensionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesLbEdgeExtensionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
