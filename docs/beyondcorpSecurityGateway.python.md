# `beyondcorpSecurityGateway` Submodule <a name="`beyondcorpSecurityGateway` Submodule" id="@cdktn/provider-google.beyondcorpSecurityGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpSecurityGateway <a name="BeyondcorpSecurityGateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway google_beyondcorp_security_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  security_gateway_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  hubs: IResolvable | typing.List[BeyondcorpSecurityGatewayHubs] = None,
  id: str = None,
  location: str = None,
  logging: BeyondcorpSecurityGatewayLogging = None,
  project: str = None,
  proxy_protocol_config: BeyondcorpSecurityGatewayProxyProtocolConfig = None,
  service_discovery: BeyondcorpSecurityGatewayServiceDiscovery = None,
  timeouts: BeyondcorpSecurityGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.hubs">hubs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]</code> | hubs block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging">BeyondcorpSecurityGatewayLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.proxyProtocolConfig">proxy_protocol_config</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig">BeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | proxy_protocol_config block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.serviceDiscovery">service_discovery</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery">BeyondcorpSecurityGatewayServiceDiscovery</a></code> | service_discovery block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.securityGatewayId"></a>

- *Type:* str

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#security_gateway_id BeyondcorpSecurityGateway#security_gateway_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#deletion_policy BeyondcorpSecurityGateway#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#display_name BeyondcorpSecurityGateway#display_name}

---

##### `hubs`<sup>Optional</sup> <a name="hubs" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.hubs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#hubs BeyondcorpSecurityGateway#hubs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#location BeyondcorpSecurityGateway#location}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging">BeyondcorpSecurityGatewayLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#logging BeyondcorpSecurityGateway#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}.

---

##### `proxy_protocol_config`<sup>Optional</sup> <a name="proxy_protocol_config" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.proxyProtocolConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig">BeyondcorpSecurityGatewayProxyProtocolConfig</a>

proxy_protocol_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#proxy_protocol_config BeyondcorpSecurityGateway#proxy_protocol_config}

---

##### `service_discovery`<sup>Optional</sup> <a name="service_discovery" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.serviceDiscovery"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery">BeyondcorpSecurityGatewayServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#service_discovery BeyondcorpSecurityGateway#service_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#timeouts BeyondcorpSecurityGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs">put_hubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putProxyProtocolConfig">put_proxy_protocol_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putServiceDiscovery">put_service_discovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetHubs">reset_hubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetProxyProtocolConfig">reset_proxy_protocol_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetServiceDiscovery">reset_service_discovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hubs` <a name="put_hubs" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs"></a>

```python
def put_hubs(
  value: IResolvable | typing.List[BeyondcorpSecurityGatewayHubs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]

---

##### `put_logging` <a name="put_logging" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putLogging"></a>

```python
def put_logging() -> None
```

##### `put_proxy_protocol_config` <a name="put_proxy_protocol_config" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putProxyProtocolConfig"></a>

```python
def put_proxy_protocol_config(
  allowed_client_headers: typing.List[str] = None,
  client_ip: bool | IResolvable = None,
  contextual_headers: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders = None,
  gateway_identity: str = None,
  metadata_headers: typing.Mapping[str] = None
) -> None
```

###### `allowed_client_headers`<sup>Optional</sup> <a name="allowed_client_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.allowedClientHeaders"></a>

- *Type:* typing.List[str]

The configuration for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#allowed_client_headers BeyondcorpSecurityGateway#allowed_client_headers}

---

###### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.clientIp"></a>

- *Type:* bool | cdktn.IResolvable

Client IP configuration. The client IP address is included if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#client_ip BeyondcorpSecurityGateway#client_ip}

---

###### `contextual_headers`<sup>Optional</sup> <a name="contextual_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.contextualHeaders"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

contextual_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#contextual_headers BeyondcorpSecurityGateway#contextual_headers}

---

###### `gateway_identity`<sup>Optional</sup> <a name="gateway_identity" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.gatewayIdentity"></a>

- *Type:* str

Gateway identity configuration. Possible values: ["RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#gateway_identity BeyondcorpSecurityGateway#gateway_identity}

---

###### `metadata_headers`<sup>Optional</sup> <a name="metadata_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.metadataHeaders"></a>

- *Type:* typing.Mapping[str]

Custom resource specific headers along with the values.

The names should conform to RFC 9110:

> Field names SHOULD constrain themselves to alphanumeric characters, "-",
> and ".", and SHOULD begin with a letter.
> Field values SHOULD contain only ASCII printable characters and tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#metadata_headers BeyondcorpSecurityGateway#metadata_headers}

---

##### `put_service_discovery` <a name="put_service_discovery" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putServiceDiscovery"></a>

```python
def put_service_discovery(
  api_gateway: BeyondcorpSecurityGatewayServiceDiscoveryApiGateway = None
) -> None
```

###### `api_gateway`<sup>Optional</sup> <a name="api_gateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putServiceDiscovery.parameter.apiGateway"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway">BeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#api_gateway BeyondcorpSecurityGateway#api_gateway}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_hubs` <a name="reset_hubs" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetHubs"></a>

```python
def reset_hubs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_proxy_protocol_config` <a name="reset_proxy_protocol_config" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetProxyProtocolConfig"></a>

```python
def reset_proxy_protocol_config() -> None
```

##### `reset_service_discovery` <a name="reset_service_discovery" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetServiceDiscovery"></a>

```python
def reset_service_discovery() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BeyondcorpSecurityGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BeyondcorpSecurityGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BeyondcorpSecurityGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.delegatingServiceAccount">delegating_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.externalIps">external_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubs">hubs</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList">BeyondcorpSecurityGatewayHubsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference">BeyondcorpSecurityGatewayLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.proxyProtocolConfig">proxy_protocol_config</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference">BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.serviceDiscovery">service_discovery</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference">BeyondcorpSecurityGatewayServiceDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference">BeyondcorpSecurityGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubsInput">hubs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging">BeyondcorpSecurityGatewayLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.proxyProtocolConfigInput">proxy_protocol_config_input</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig">BeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayIdInput">security_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.serviceDiscoveryInput">service_discovery_input</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery">BeyondcorpSecurityGatewayServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delegating_service_account`<sup>Required</sup> <a name="delegating_service_account" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.delegatingServiceAccount"></a>

```python
delegating_service_account: str
```

- *Type:* str

---

##### `external_ips`<sup>Required</sup> <a name="external_ips" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.externalIps"></a>

```python
external_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hubs`<sup>Required</sup> <a name="hubs" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubs"></a>

```python
hubs: BeyondcorpSecurityGatewayHubsList
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList">BeyondcorpSecurityGatewayHubsList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.logging"></a>

```python
logging: BeyondcorpSecurityGatewayLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference">BeyondcorpSecurityGatewayLoggingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `proxy_protocol_config`<sup>Required</sup> <a name="proxy_protocol_config" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.proxyProtocolConfig"></a>

```python
proxy_protocol_config: BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference">BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference</a>

---

##### `service_discovery`<sup>Required</sup> <a name="service_discovery" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.serviceDiscovery"></a>

```python
service_discovery: BeyondcorpSecurityGatewayServiceDiscoveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference">BeyondcorpSecurityGatewayServiceDiscoveryOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeouts"></a>

```python
timeouts: BeyondcorpSecurityGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference">BeyondcorpSecurityGatewayTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `hubs_input`<sup>Optional</sup> <a name="hubs_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubsInput"></a>

```python
hubs_input: IResolvable | typing.List[BeyondcorpSecurityGatewayHubs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.loggingInput"></a>

```python
logging_input: BeyondcorpSecurityGatewayLogging
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging">BeyondcorpSecurityGatewayLogging</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `proxy_protocol_config_input`<sup>Optional</sup> <a name="proxy_protocol_config_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.proxyProtocolConfigInput"></a>

```python
proxy_protocol_config_input: BeyondcorpSecurityGatewayProxyProtocolConfig
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig">BeyondcorpSecurityGatewayProxyProtocolConfig</a>

---

##### `security_gateway_id_input`<sup>Optional</sup> <a name="security_gateway_id_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayIdInput"></a>

```python
security_gateway_id_input: str
```

- *Type:* str

---

##### `service_discovery_input`<sup>Optional</sup> <a name="service_discovery_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.serviceDiscoveryInput"></a>

```python
service_discovery_input: BeyondcorpSecurityGatewayServiceDiscovery
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery">BeyondcorpSecurityGatewayServiceDiscovery</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BeyondcorpSecurityGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpSecurityGatewayConfig <a name="BeyondcorpSecurityGatewayConfig" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  security_gateway_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  hubs: IResolvable | typing.List[BeyondcorpSecurityGatewayHubs] = None,
  id: str = None,
  location: str = None,
  logging: BeyondcorpSecurityGatewayLogging = None,
  project: str = None,
  proxy_protocol_config: BeyondcorpSecurityGatewayProxyProtocolConfig = None,
  service_discovery: BeyondcorpSecurityGatewayServiceDiscovery = None,
  timeouts: BeyondcorpSecurityGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.hubs">hubs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]</code> | hubs block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging">BeyondcorpSecurityGatewayLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.proxyProtocolConfig">proxy_protocol_config</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig">BeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | proxy_protocol_config block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.serviceDiscovery">service_discovery</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery">BeyondcorpSecurityGatewayServiceDiscovery</a></code> | service_discovery block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#security_gateway_id BeyondcorpSecurityGateway#security_gateway_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#deletion_policy BeyondcorpSecurityGateway#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#display_name BeyondcorpSecurityGateway#display_name}

---

##### `hubs`<sup>Optional</sup> <a name="hubs" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.hubs"></a>

```python
hubs: IResolvable | typing.List[BeyondcorpSecurityGatewayHubs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#hubs BeyondcorpSecurityGateway#hubs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#location BeyondcorpSecurityGateway#location}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.logging"></a>

```python
logging: BeyondcorpSecurityGatewayLogging
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging">BeyondcorpSecurityGatewayLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#logging BeyondcorpSecurityGateway#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}.

---

##### `proxy_protocol_config`<sup>Optional</sup> <a name="proxy_protocol_config" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.proxyProtocolConfig"></a>

```python
proxy_protocol_config: BeyondcorpSecurityGatewayProxyProtocolConfig
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig">BeyondcorpSecurityGatewayProxyProtocolConfig</a>

proxy_protocol_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#proxy_protocol_config BeyondcorpSecurityGateway#proxy_protocol_config}

---

##### `service_discovery`<sup>Optional</sup> <a name="service_discovery" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.serviceDiscovery"></a>

```python
service_discovery: BeyondcorpSecurityGatewayServiceDiscovery
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery">BeyondcorpSecurityGatewayServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#service_discovery BeyondcorpSecurityGateway#service_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.timeouts"></a>

```python
timeouts: BeyondcorpSecurityGatewayTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#timeouts BeyondcorpSecurityGateway#timeouts}

---

### BeyondcorpSecurityGatewayHubs <a name="BeyondcorpSecurityGatewayHubs" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs(
  region: str,
  internet_gateway: BeyondcorpSecurityGatewayHubsInternetGateway = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#region BeyondcorpSecurityGateway#region}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.internetGateway">internet_gateway</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | internet_gateway block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#region BeyondcorpSecurityGateway#region}.

---

##### `internet_gateway`<sup>Optional</sup> <a name="internet_gateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.internetGateway"></a>

```python
internet_gateway: BeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

internet_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#internet_gateway BeyondcorpSecurityGateway#internet_gateway}

---

### BeyondcorpSecurityGatewayHubsInternetGateway <a name="BeyondcorpSecurityGatewayHubsInternetGateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway()
```


### BeyondcorpSecurityGatewayLogging <a name="BeyondcorpSecurityGatewayLogging" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging()
```


### BeyondcorpSecurityGatewayProxyProtocolConfig <a name="BeyondcorpSecurityGatewayProxyProtocolConfig" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig(
  allowed_client_headers: typing.List[str] = None,
  client_ip: bool | IResolvable = None,
  contextual_headers: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders = None,
  gateway_identity: str = None,
  metadata_headers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.property.allowedClientHeaders">allowed_client_headers</a></code> | <code>typing.List[str]</code> | The configuration for the proxy. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.property.clientIp">client_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Client IP configuration. The client IP address is included if true. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.property.contextualHeaders">contextual_headers</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | contextual_headers block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.property.gatewayIdentity">gateway_identity</a></code> | <code>str</code> | Gateway identity configuration. Possible values: ["RESOURCE_NAME"]. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.property.metadataHeaders">metadata_headers</a></code> | <code>typing.Mapping[str]</code> | Custom resource specific headers along with the values. |

---

##### `allowed_client_headers`<sup>Optional</sup> <a name="allowed_client_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.property.allowedClientHeaders"></a>

```python
allowed_client_headers: typing.List[str]
```

- *Type:* typing.List[str]

The configuration for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#allowed_client_headers BeyondcorpSecurityGateway#allowed_client_headers}

---

##### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.property.clientIp"></a>

```python
client_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Client IP configuration. The client IP address is included if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#client_ip BeyondcorpSecurityGateway#client_ip}

---

##### `contextual_headers`<sup>Optional</sup> <a name="contextual_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.property.contextualHeaders"></a>

```python
contextual_headers: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

contextual_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#contextual_headers BeyondcorpSecurityGateway#contextual_headers}

---

##### `gateway_identity`<sup>Optional</sup> <a name="gateway_identity" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.property.gatewayIdentity"></a>

```python
gateway_identity: str
```

- *Type:* str

Gateway identity configuration. Possible values: ["RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#gateway_identity BeyondcorpSecurityGateway#gateway_identity}

---

##### `metadata_headers`<sup>Optional</sup> <a name="metadata_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig.property.metadataHeaders"></a>

```python
metadata_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom resource specific headers along with the values.

The names should conform to RFC 9110:

> Field names SHOULD constrain themselves to alphanumeric characters, "-",
> and ".", and SHOULD begin with a letter.
> Field values SHOULD contain only ASCII printable characters and tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#metadata_headers BeyondcorpSecurityGateway#metadata_headers}

---

### BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders <a name="BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders(
  device_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo = None,
  group_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo = None,
  output_type: str = None,
  user_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.deviceInfo">device_info</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | device_info block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.groupInfo">group_info</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | group_info block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.outputType">output_type</a></code> | <code>str</code> | Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"]. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.userInfo">user_info</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | user_info block. |

---

##### `device_info`<sup>Optional</sup> <a name="device_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.deviceInfo"></a>

```python
device_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

device_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#device_info BeyondcorpSecurityGateway#device_info}

---

##### `group_info`<sup>Optional</sup> <a name="group_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.groupInfo"></a>

```python
group_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

group_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#group_info BeyondcorpSecurityGateway#group_info}

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}

---

##### `user_info`<sup>Optional</sup> <a name="user_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.userInfo"></a>

```python
user_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

user_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#user_info BeyondcorpSecurityGateway#user_info}

---

### BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo <a name="BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo(
  output_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.property.outputType">output_type</a></code> | <code>str</code> | The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}

---

### BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo <a name="BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo(
  output_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.property.outputType">output_type</a></code> | <code>str</code> | The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}

---

### BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo <a name="BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo(
  output_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.property.outputType">output_type</a></code> | <code>str</code> | The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}

---

### BeyondcorpSecurityGatewayServiceDiscovery <a name="BeyondcorpSecurityGatewayServiceDiscovery" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery(
  api_gateway: BeyondcorpSecurityGatewayServiceDiscoveryApiGateway = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery.property.apiGateway">api_gateway</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway">BeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | api_gateway block. |

---

##### `api_gateway`<sup>Optional</sup> <a name="api_gateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery.property.apiGateway"></a>

```python
api_gateway: BeyondcorpSecurityGatewayServiceDiscoveryApiGateway
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway">BeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#api_gateway BeyondcorpSecurityGateway#api_gateway}

---

### BeyondcorpSecurityGatewayServiceDiscoveryApiGateway <a name="BeyondcorpSecurityGatewayServiceDiscoveryApiGateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway(
  resource_override: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway.property.resourceOverride">resource_override</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | resource_override block. |

---

##### `resource_override`<sup>Optional</sup> <a name="resource_override" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway.property.resourceOverride"></a>

```python
resource_override: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

resource_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#resource_override BeyondcorpSecurityGateway#resource_override}

---

### BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride <a name="BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride(
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.property.path">path</a></code> | <code>str</code> | Contains uri path fragment where HTTP request is sent. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.property.path"></a>

```python
path: str
```

- *Type:* str

Contains uri path fragment where HTTP request is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#path BeyondcorpSecurityGateway#path}

---

### BeyondcorpSecurityGatewayTimeouts <a name="BeyondcorpSecurityGatewayTimeouts" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference <a name="BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps">assigned_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assigned_ips`<sup>Required</sup> <a name="assigned_ips" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps"></a>

```python
assigned_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

---


### BeyondcorpSecurityGatewayHubsList <a name="BeyondcorpSecurityGatewayHubsList" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BeyondcorpSecurityGatewayHubsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BeyondcorpSecurityGatewayHubs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>]

---


### BeyondcorpSecurityGatewayHubsOutputReference <a name="BeyondcorpSecurityGatewayHubsOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway">put_internet_gateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway">reset_internet_gateway</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internet_gateway` <a name="put_internet_gateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway"></a>

```python
def put_internet_gateway() -> None
```

##### `reset_internet_gateway` <a name="reset_internet_gateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway"></a>

```python
def reset_internet_gateway() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway">internet_gateway</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput">internet_gateway_input</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internet_gateway`<sup>Required</sup> <a name="internet_gateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway"></a>

```python
internet_gateway: BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a>

---

##### `internet_gateway_input`<sup>Optional</sup> <a name="internet_gateway_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput"></a>

```python
internet_gateway_input: BeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BeyondcorpSecurityGatewayHubs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>

---


### BeyondcorpSecurityGatewayLoggingOutputReference <a name="BeyondcorpSecurityGatewayLoggingOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging">BeyondcorpSecurityGatewayLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayLogging
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayLogging">BeyondcorpSecurityGatewayLogging</a>

---


### BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference <a name="BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

---


### BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference <a name="BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

---


### BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference <a name="BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putDeviceInfo">put_device_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putGroupInfo">put_group_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putUserInfo">put_user_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetDeviceInfo">reset_device_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetGroupInfo">reset_group_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetUserInfo">reset_user_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_device_info` <a name="put_device_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putDeviceInfo"></a>

```python
def put_device_info(
  output_type: str = None
) -> None
```

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putDeviceInfo.parameter.outputType"></a>

- *Type:* str

The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}

---

##### `put_group_info` <a name="put_group_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putGroupInfo"></a>

```python
def put_group_info(
  output_type: str = None
) -> None
```

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putGroupInfo.parameter.outputType"></a>

- *Type:* str

The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}

---

##### `put_user_info` <a name="put_user_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putUserInfo"></a>

```python
def put_user_info(
  output_type: str = None
) -> None
```

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putUserInfo.parameter.outputType"></a>

- *Type:* str

The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}

---

##### `reset_device_info` <a name="reset_device_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetDeviceInfo"></a>

```python
def reset_device_info() -> None
```

##### `reset_group_info` <a name="reset_group_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetGroupInfo"></a>

```python
def reset_group_info() -> None
```

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```

##### `reset_user_info` <a name="reset_user_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetUserInfo"></a>

```python
def reset_user_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo">device_info</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo">group_info</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo">user_info</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfoInput">device_info_input</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfoInput">group_info_input</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfoInput">user_info_input</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_info`<sup>Required</sup> <a name="device_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo"></a>

```python
device_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference</a>

---

##### `group_info`<sup>Required</sup> <a name="group_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo"></a>

```python
group_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference</a>

---

##### `user_info`<sup>Required</sup> <a name="user_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo"></a>

```python
user_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference</a>

---

##### `device_info_input`<sup>Optional</sup> <a name="device_info_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfoInput"></a>

```python
device_info_input: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

---

##### `group_info_input`<sup>Optional</sup> <a name="group_info_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfoInput"></a>

```python
group_info_input: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `user_info_input`<sup>Optional</sup> <a name="user_info_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfoInput"></a>

```python
user_info_input: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

---


### BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference <a name="BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

---


### BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference <a name="BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders">put_contextual_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetAllowedClientHeaders">reset_allowed_client_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetClientIp">reset_client_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetContextualHeaders">reset_contextual_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetGatewayIdentity">reset_gateway_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetMetadataHeaders">reset_metadata_headers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_contextual_headers` <a name="put_contextual_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders"></a>

```python
def put_contextual_headers(
  device_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo = None,
  group_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo = None,
  output_type: str = None,
  user_info: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo = None
) -> None
```

###### `device_info`<sup>Optional</sup> <a name="device_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders.parameter.deviceInfo"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

device_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#device_info BeyondcorpSecurityGateway#device_info}

---

###### `group_info`<sup>Optional</sup> <a name="group_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders.parameter.groupInfo"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

group_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#group_info BeyondcorpSecurityGateway#group_info}

---

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders.parameter.outputType"></a>

- *Type:* str

Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#output_type BeyondcorpSecurityGateway#output_type}

---

###### `user_info`<sup>Optional</sup> <a name="user_info" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders.parameter.userInfo"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

user_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#user_info BeyondcorpSecurityGateway#user_info}

---

##### `reset_allowed_client_headers` <a name="reset_allowed_client_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetAllowedClientHeaders"></a>

```python
def reset_allowed_client_headers() -> None
```

##### `reset_client_ip` <a name="reset_client_ip" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetClientIp"></a>

```python
def reset_client_ip() -> None
```

##### `reset_contextual_headers` <a name="reset_contextual_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetContextualHeaders"></a>

```python
def reset_contextual_headers() -> None
```

##### `reset_gateway_identity` <a name="reset_gateway_identity" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetGatewayIdentity"></a>

```python
def reset_gateway_identity() -> None
```

##### `reset_metadata_headers` <a name="reset_metadata_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetMetadataHeaders"></a>

```python
def reset_metadata_headers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders">contextual_headers</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeadersInput">allowed_client_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIpInput">client_ip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeadersInput">contextual_headers_input</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentityInput">gateway_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeadersInput">metadata_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders">allowed_client_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp">client_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity">gateway_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders">metadata_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig">BeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contextual_headers`<sup>Required</sup> <a name="contextual_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders"></a>

```python
contextual_headers: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference</a>

---

##### `allowed_client_headers_input`<sup>Optional</sup> <a name="allowed_client_headers_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeadersInput"></a>

```python
allowed_client_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_ip_input`<sup>Optional</sup> <a name="client_ip_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIpInput"></a>

```python
client_ip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contextual_headers_input`<sup>Optional</sup> <a name="contextual_headers_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeadersInput"></a>

```python
contextual_headers_input: BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">BeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

---

##### `gateway_identity_input`<sup>Optional</sup> <a name="gateway_identity_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentityInput"></a>

```python
gateway_identity_input: str
```

- *Type:* str

---

##### `metadata_headers_input`<sup>Optional</sup> <a name="metadata_headers_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeadersInput"></a>

```python
metadata_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_client_headers`<sup>Required</sup> <a name="allowed_client_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders"></a>

```python
allowed_client_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_ip`<sup>Required</sup> <a name="client_ip" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp"></a>

```python
client_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gateway_identity`<sup>Required</sup> <a name="gateway_identity" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity"></a>

```python
gateway_identity: str
```

- *Type:* str

---

##### `metadata_headers`<sup>Required</sup> <a name="metadata_headers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders"></a>

```python
metadata_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayProxyProtocolConfig
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayProxyProtocolConfig">BeyondcorpSecurityGatewayProxyProtocolConfig</a>

---


### BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference <a name="BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.putResourceOverride">put_resource_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resetResourceOverride">reset_resource_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_override` <a name="put_resource_override" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.putResourceOverride"></a>

```python
def put_resource_override(
  path: str = None
) -> None
```

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.putResourceOverride.parameter.path"></a>

- *Type:* str

Contains uri path fragment where HTTP request is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#path BeyondcorpSecurityGateway#path}

---

##### `reset_resource_override` <a name="reset_resource_override" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resetResourceOverride"></a>

```python
def reset_resource_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride">resource_override</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverrideInput">resource_override_input</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway">BeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_override`<sup>Required</sup> <a name="resource_override" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride"></a>

```python
resource_override: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference</a>

---

##### `resource_override_input`<sup>Optional</sup> <a name="resource_override_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverrideInput"></a>

```python
resource_override_input: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayServiceDiscoveryApiGateway
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway">BeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

---


### BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference <a name="BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

---


### BeyondcorpSecurityGatewayServiceDiscoveryOutputReference <a name="BeyondcorpSecurityGatewayServiceDiscoveryOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.putApiGateway">put_api_gateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resetApiGateway">reset_api_gateway</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_gateway` <a name="put_api_gateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.putApiGateway"></a>

```python
def put_api_gateway(
  resource_override: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride = None
) -> None
```

###### `resource_override`<sup>Optional</sup> <a name="resource_override" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.putApiGateway.parameter.resourceOverride"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

resource_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway#resource_override BeyondcorpSecurityGateway#resource_override}

---

##### `reset_api_gateway` <a name="reset_api_gateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resetApiGateway"></a>

```python
def reset_api_gateway() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway">api_gateway</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGatewayInput">api_gateway_input</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway">BeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery">BeyondcorpSecurityGatewayServiceDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_gateway`<sup>Required</sup> <a name="api_gateway" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway"></a>

```python
api_gateway: BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference">BeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference</a>

---

##### `api_gateway_input`<sup>Optional</sup> <a name="api_gateway_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGatewayInput"></a>

```python
api_gateway_input: BeyondcorpSecurityGatewayServiceDiscoveryApiGateway
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryApiGateway">BeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpSecurityGatewayServiceDiscovery
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayServiceDiscovery">BeyondcorpSecurityGatewayServiceDiscovery</a>

---


### BeyondcorpSecurityGatewayTimeoutsOutputReference <a name="BeyondcorpSecurityGatewayTimeoutsOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import beyondcorp_security_gateway

beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BeyondcorpSecurityGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

---



