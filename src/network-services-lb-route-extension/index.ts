/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkServicesLbRouteExtensionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#deletion_policy NetworkServicesLbRouteExtension#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A human-readable description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#description NetworkServicesLbRouteExtension#description}
  */
  readonly description?: string;
  /**
  * A list of references to the forwarding rules to which this service extension is attached to.
  * At least one forwarding rule is required. There can be only one LbRouteExtension resource per forwarding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#forwarding_rules NetworkServicesLbRouteExtension#forwarding_rules}
  */
  readonly forwardingRules: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#id NetworkServicesLbRouteExtension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of labels associated with the LbRouteExtension resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#labels NetworkServicesLbRouteExtension#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.
  * For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
  * [Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#load_balancing_scheme NetworkServicesLbRouteExtension#load_balancing_scheme}
  */
  readonly loadBalancingScheme: string;
  /**
  * The location of the route extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#location NetworkServicesLbRouteExtension#location}
  */
  readonly location: string;
  /**
  * Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#project NetworkServicesLbRouteExtension#project}
  */
  readonly project?: string;
  /**
  * extension_chains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#extension_chains NetworkServicesLbRouteExtension#extension_chains}
  */
  readonly extensionChains: NetworkServicesLbRouteExtensionExtensionChains[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#timeouts NetworkServicesLbRouteExtension#timeouts}
  */
  readonly timeouts?: NetworkServicesLbRouteExtensionTimeouts;
}
export interface NetworkServicesLbRouteExtensionExtensionChainsExtensions {
  /**
  * The :authority header in the gRPC request sent from Envoy to the extension service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#authority NetworkServicesLbRouteExtension#authority}
  */
  readonly authority?: string;
  /**
  * Determines how the proxy behaves if the call to the extension fails or times out.
  * When set to TRUE, request or response processing continues without error.
  * Any subsequent extensions in the extension chain are also executed.
  * When set to FALSE: * If response headers have not been delivered to the downstream client,
  * a generic 500 error is returned to the client. The error response can be tailored by
  * configuring a custom error response in the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#fail_open NetworkServicesLbRouteExtension#fail_open}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#forward_attributes NetworkServicesLbRouteExtension#forward_attributes}
  */
  readonly forwardAttributes?: string[];
  /**
  * List of the HTTP headers to forward to the extension (from the client or backend).
  * If omitted, all headers are sent. Each element is a string indicating the header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#forward_headers NetworkServicesLbRouteExtension#forward_headers}
  */
  readonly forwardHeaders?: string[];
  /**
  * The metadata provided here is included as part of the 'metadata_context' (of type 'google.protobuf.Struct')
  * in the 'ProcessingRequest' message sent to the extension server.
  * The metadata is available under the namespace 'com.google.lb_route_extension.<resource_name>.<chain_name>.<extension_name>'.
  * The following variables are supported in the metadata: '{forwarding_rule_id}' - substituted with the forwarding rule's fully qualified resource name.
  * This field must not be set for plugin extensions. Setting it results in a validation error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#metadata NetworkServicesLbRouteExtension#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The name for this extension. The name is logged as part of the HTTP request logs.
  * The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
  * and can have a maximum length of 63 characters. Additionally, the first character must be a letter
  * and the last a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}
  */
  readonly name: string;
  /**
  * When set to 'TRUE', enables 'observability_mode' on the 'ext_proc' filter.
  * This makes 'ext_proc' calls asynchronous. Envoy doesn't check for the response from 'ext_proc' calls.
  * For more information about the filter, see: https://www.envoyproxy.io/docs/envoy/v1.32.3/api-v3/extensions/filters/http/ext_proc/v3/ext_proc.proto
  * This field is helpful when you want to try out the extension in async log-only mode.
  * Supported by regional 'LbTrafficExtension' and 'LbRouteExtension' resources.
  * Only 'STREAMED' (default) body processing mode is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#observability_mode NetworkServicesLbRouteExtension#observability_mode}
  */
  readonly observabilityMode?: boolean | cdktn.IResolvable;
  /**
  * Configures the send mode for request body processing.
  * The field can only be set if 'supported_events' includes 'REQUEST_BODY'.
  * If 'supported_events' includes 'REQUEST_BODY', but 'request_body_send_mode' is unset, the default value 'STREAMED' is used.
  * When this field is set to 'FULL_DUPLEX_STREAMED', 'supported_events' must include both 'REQUEST_BODY' and 'REQUEST_TRAILERS'.
  * This field can be set only when the 'service' field of the extension points to a 'BackendService'.
  * Only 'FULL_DUPLEX_STREAMED' mode is supported for 'LbRouteExtension' resources. Possible values: ["BODY_SEND_MODE_UNSPECIFIED", "BODY_SEND_MODE_STREAMED", "BODY_SEND_MODE_FULL_DUPLEX_STREAMED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#request_body_send_mode NetworkServicesLbRouteExtension#request_body_send_mode}
  */
  readonly requestBodySendMode?: string;
  /**
  * The reference to the service that runs the extension.
  * 
  * * To configure a callout extension, service must be a fully-qualified reference to a backend service.
  * * To configure a plugin extension, service must be a reference to a WasmPlugin resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#service NetworkServicesLbRouteExtension#service}
  */
  readonly service: string;
  /**
  * A set of events during request or response processing for which this extension is called.
  * This field is optional for the LbRouteExtension resource. If unspecified, 'REQUEST_HEADERS' event is assumed as supported.
  * Possible values: 'REQUEST_HEADERS', 'REQUEST_BODY', 'REQUEST_TRAILERS'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#supported_events NetworkServicesLbRouteExtension#supported_events}
  */
  readonly supportedEvents?: string[];
  /**
  * Specifies the timeout for each individual message on the stream. The timeout must be between 10-1000 milliseconds.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#timeout NetworkServicesLbRouteExtension#timeout}
  */
  readonly timeout?: string;
}

export function networkServicesLbRouteExtensionExtensionChainsExtensionsToTerraform(struct?: NetworkServicesLbRouteExtensionExtensionChainsExtensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authority: cdktn.stringToTerraform(struct!.authority),
    fail_open: cdktn.booleanToTerraform(struct!.failOpen),
    forward_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.forwardAttributes),
    forward_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.forwardHeaders),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    name: cdktn.stringToTerraform(struct!.name),
    observability_mode: cdktn.booleanToTerraform(struct!.observabilityMode),
    request_body_send_mode: cdktn.stringToTerraform(struct!.requestBodySendMode),
    service: cdktn.stringToTerraform(struct!.service),
    supported_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedEvents),
    timeout: cdktn.stringToTerraform(struct!.timeout),
  }
}


export function networkServicesLbRouteExtensionExtensionChainsExtensionsToHclTerraform(struct?: NetworkServicesLbRouteExtensionExtensionChainsExtensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authority: {
      value: cdktn.stringToHclTerraform(struct!.authority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    observability_mode: {
      value: cdktn.booleanToHclTerraform(struct!.observabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_body_send_mode: {
      value: cdktn.stringToHclTerraform(struct!.requestBodySendMode),
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
      type: "set",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktn.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkServicesLbRouteExtensionExtensionChainsExtensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
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
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._observabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.observabilityMode = this._observabilityMode;
    }
    if (this._requestBodySendMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodySendMode = this._requestBodySendMode;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._supportedEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedEvents = this._supportedEvents;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesLbRouteExtensionExtensionChainsExtensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._failOpen = undefined;
      this._forwardAttributes = undefined;
      this._forwardHeaders = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._observabilityMode = undefined;
      this._requestBodySendMode = undefined;
      this._service = undefined;
      this._supportedEvents = undefined;
      this._timeout = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._failOpen = value.failOpen;
      this._forwardAttributes = value.forwardAttributes;
      this._forwardHeaders = value.forwardHeaders;
      this._metadata = value.metadata;
      this._name = value.name;
      this._observabilityMode = value.observabilityMode;
      this._requestBodySendMode = value.requestBodySendMode;
      this._service = value.service;
      this._supportedEvents = value.supportedEvents;
      this._timeout = value.timeout;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // observability_mode - computed: false, optional: true, required: false
  private _observabilityMode?: boolean | cdktn.IResolvable; 
  public get observabilityMode() {
    return this.getBooleanAttribute('observability_mode');
  }
  public set observabilityMode(value: boolean | cdktn.IResolvable) {
    this._observabilityMode = value;
  }
  public resetObservabilityMode() {
    this._observabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityModeInput() {
    return this._observabilityMode;
  }

  // request_body_send_mode - computed: false, optional: true, required: false
  private _requestBodySendMode?: string; 
  public get requestBodySendMode() {
    return this.getStringAttribute('request_body_send_mode');
  }
  public set requestBodySendMode(value: string) {
    this._requestBodySendMode = value;
  }
  public resetRequestBodySendMode() {
    this._requestBodySendMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodySendModeInput() {
    return this._requestBodySendMode;
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
    return cdktn.Fn.tolist(this.getListAttribute('supported_events'));
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class NetworkServicesLbRouteExtensionExtensionChainsExtensionsList extends cdktn.ComplexList {
  public internalValue? : NetworkServicesLbRouteExtensionExtensionChainsExtensions[] | cdktn.IResolvable

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
  public get(index: number): NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference {
    return new NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesLbRouteExtensionExtensionChainsMatchCondition {
  /**
  * A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#cel_expression NetworkServicesLbRouteExtension#cel_expression}
  */
  readonly celExpression: string;
}

export function networkServicesLbRouteExtensionExtensionChainsMatchConditionToTerraform(struct?: NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference | NetworkServicesLbRouteExtensionExtensionChainsMatchCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cel_expression: cdktn.stringToTerraform(struct!.celExpression),
  }
}


export function networkServicesLbRouteExtensionExtensionChainsMatchConditionToHclTerraform(struct?: NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference | NetworkServicesLbRouteExtensionExtensionChainsMatchCondition): any {
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

export class NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesLbRouteExtensionExtensionChainsMatchCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._celExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.celExpression = this._celExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesLbRouteExtensionExtensionChainsMatchCondition | undefined) {
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
export interface NetworkServicesLbRouteExtensionExtensionChains {
  /**
  * The name for this extension chain. The name is logged as part of the HTTP request logs.
  * The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
  * and can have a maximum length of 63 characters. Additionally, the first character must be a letter
  * and the last character must be a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}
  */
  readonly name: string;
  /**
  * extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#extensions NetworkServicesLbRouteExtension#extensions}
  */
  readonly extensions: NetworkServicesLbRouteExtensionExtensionChainsExtensions[] | cdktn.IResolvable;
  /**
  * match_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#match_condition NetworkServicesLbRouteExtension#match_condition}
  */
  readonly matchCondition: NetworkServicesLbRouteExtensionExtensionChainsMatchCondition;
}

export function networkServicesLbRouteExtensionExtensionChainsToTerraform(struct?: NetworkServicesLbRouteExtensionExtensionChains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    extensions: cdktn.listMapper(networkServicesLbRouteExtensionExtensionChainsExtensionsToTerraform, true)(struct!.extensions),
    match_condition: networkServicesLbRouteExtensionExtensionChainsMatchConditionToTerraform(struct!.matchCondition),
  }
}


export function networkServicesLbRouteExtensionExtensionChainsToHclTerraform(struct?: NetworkServicesLbRouteExtensionExtensionChains | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(networkServicesLbRouteExtensionExtensionChainsExtensionsToHclTerraform, true)(struct!.extensions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesLbRouteExtensionExtensionChainsExtensionsList",
    },
    match_condition: {
      value: networkServicesLbRouteExtensionExtensionChainsMatchConditionToHclTerraform(struct!.matchCondition),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesLbRouteExtensionExtensionChainsMatchConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesLbRouteExtensionExtensionChainsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkServicesLbRouteExtensionExtensionChains | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesLbRouteExtensionExtensionChains | cdktn.IResolvable | undefined) {
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
  private _extensions = new NetworkServicesLbRouteExtensionExtensionChainsExtensionsList(this, "extensions", false);
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: NetworkServicesLbRouteExtensionExtensionChainsExtensions[] | cdktn.IResolvable) {
    this._extensions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // match_condition - computed: false, optional: false, required: true
  private _matchCondition = new NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference(this, "match_condition");
  public get matchCondition() {
    return this._matchCondition;
  }
  public putMatchCondition(value: NetworkServicesLbRouteExtensionExtensionChainsMatchCondition) {
    this._matchCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionInput() {
    return this._matchCondition.internalValue;
  }
}

export class NetworkServicesLbRouteExtensionExtensionChainsList extends cdktn.ComplexList {
  public internalValue? : NetworkServicesLbRouteExtensionExtensionChains[] | cdktn.IResolvable

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
  public get(index: number): NetworkServicesLbRouteExtensionExtensionChainsOutputReference {
    return new NetworkServicesLbRouteExtensionExtensionChainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesLbRouteExtensionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#create NetworkServicesLbRouteExtension#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#delete NetworkServicesLbRouteExtension#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#update NetworkServicesLbRouteExtension#update}
  */
  readonly update?: string;
}

export function networkServicesLbRouteExtensionTimeoutsToTerraform(struct?: NetworkServicesLbRouteExtensionTimeouts | cdktn.IResolvable): any {
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


export function networkServicesLbRouteExtensionTimeoutsToHclTerraform(struct?: NetworkServicesLbRouteExtensionTimeouts | cdktn.IResolvable): any {
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

export class NetworkServicesLbRouteExtensionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesLbRouteExtensionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesLbRouteExtensionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension google_network_services_lb_route_extension}
*/
export class NetworkServicesLbRouteExtension extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_lb_route_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkServicesLbRouteExtension resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesLbRouteExtension to import
  * @param importFromId The id of the existing NetworkServicesLbRouteExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesLbRouteExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_lb_route_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_lb_route_extension google_network_services_lb_route_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesLbRouteExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesLbRouteExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_lb_route_extension',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
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
  private _extensionChains = new NetworkServicesLbRouteExtensionExtensionChainsList(this, "extension_chains", false);
  public get extensionChains() {
    return this._extensionChains;
  }
  public putExtensionChains(value: NetworkServicesLbRouteExtensionExtensionChains[] | cdktn.IResolvable) {
    this._extensionChains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionChainsInput() {
    return this._extensionChains.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesLbRouteExtensionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesLbRouteExtensionTimeouts) {
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
      extension_chains: cdktn.listMapper(networkServicesLbRouteExtensionExtensionChainsToTerraform, true)(this._extensionChains.internalValue),
      timeouts: networkServicesLbRouteExtensionTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: cdktn.listMapperHcl(networkServicesLbRouteExtensionExtensionChainsToHclTerraform, true)(this._extensionChains.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesLbRouteExtensionExtensionChainsList",
      },
      timeouts: {
        value: networkServicesLbRouteExtensionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesLbRouteExtensionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
