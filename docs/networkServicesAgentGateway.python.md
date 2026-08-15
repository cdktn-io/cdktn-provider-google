# `networkServicesAgentGateway` Submodule <a name="`networkServicesAgentGateway` Submodule" id="@cdktn/provider-google.networkServicesAgentGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesAgentGateway <a name="NetworkServicesAgentGateway" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway google_network_services_agent_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  google_managed: NetworkServicesAgentGatewayGoogleManaged = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network_config: NetworkServicesAgentGatewayNetworkConfig = None,
  project: str = None,
  protocols: typing.List[str] = None,
  registries: typing.List[str] = None,
  self_managed: NetworkServicesAgentGatewaySelfManaged = None,
  timeouts: NetworkServicesAgentGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the agent gateway. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.googleManaged">google_managed</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a></code> | google_managed block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#id NetworkServicesAgentGateway#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#project NetworkServicesAgentGateway#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.protocols">protocols</a></code> | <code>typing.List[str]</code> | List of protocols supported by an Agent Gateway. Possible values: ["MCP"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.registries">registries</a></code> | <code>typing.List[str]</code> | A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.location"></a>

- *Type:* str

The location of the agent gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#location NetworkServicesAgentGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.name"></a>

- *Type:* str

Name of the AgentGateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#name NetworkServicesAgentGateway#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#deletion_policy NetworkServicesAgentGateway#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#description NetworkServicesAgentGateway#description}

---

##### `google_managed`<sup>Optional</sup> <a name="google_managed" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.googleManaged"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a>

google_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#google_managed NetworkServicesAgentGateway#google_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#id NetworkServicesAgentGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the AgentGateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#labels NetworkServicesAgentGateway#labels}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#network_config NetworkServicesAgentGateway#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#project NetworkServicesAgentGateway#project}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.protocols"></a>

- *Type:* typing.List[str]

List of protocols supported by an Agent Gateway. Possible values: ["MCP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#protocols NetworkServicesAgentGateway#protocols}

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.registries"></a>

- *Type:* typing.List[str]

A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway.

Note: Currently limited to project-scoped registries Must be of format
'//agentregistry.googleapis.com/{version}/projects/{{project}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#registries NetworkServicesAgentGateway#registries}

---

##### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.selfManaged"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#self_managed NetworkServicesAgentGateway#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#timeouts NetworkServicesAgentGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putGoogleManaged">put_google_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putSelfManaged">put_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetGoogleManaged">reset_google_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetRegistries">reset_registries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetSelfManaged">reset_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_google_managed` <a name="put_google_managed" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putGoogleManaged"></a>

```python
def put_google_managed(
  governed_access_path: str
) -> None
```

###### `governed_access_path`<sup>Required</sup> <a name="governed_access_path" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putGoogleManaged.parameter.governedAccessPath"></a>

- *Type:* str

Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#governed_access_path NetworkServicesAgentGateway#governed_access_path}

---

##### `put_network_config` <a name="put_network_config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putNetworkConfig"></a>

```python
def put_network_config(
  egress: NetworkServicesAgentGatewayNetworkConfigEgress,
  dns_peering_config: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig = None
) -> None
```

###### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putNetworkConfig.parameter.egress"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#egress NetworkServicesAgentGateway#egress}

---

###### `dns_peering_config`<sup>Optional</sup> <a name="dns_peering_config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putNetworkConfig.parameter.dnsPeeringConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#dns_peering_config NetworkServicesAgentGateway#dns_peering_config}

---

##### `put_self_managed` <a name="put_self_managed" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putSelfManaged"></a>

```python
def put_self_managed(
  resource_uri: str
) -> None
```

###### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putSelfManaged.parameter.resourceUri"></a>

- *Type:* str

A supported Google Cloud networking proxy in the Project and Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#resource_uri NetworkServicesAgentGateway#resource_uri}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#create NetworkServicesAgentGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#delete NetworkServicesAgentGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#update NetworkServicesAgentGateway#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_google_managed` <a name="reset_google_managed" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetGoogleManaged"></a>

```python
def reset_google_managed() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_registries` <a name="reset_registries" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetRegistries"></a>

```python
def reset_registries() -> None
```

##### `reset_self_managed` <a name="reset_self_managed" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetSelfManaged"></a>

```python
def reset_self_managed() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isConstruct"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformElement"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformResource"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesAgentGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesAgentGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesAgentGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.agentGatewayCard">agent_gateway_card</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList">NetworkServicesAgentGatewayAgentGatewayCardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.googleManaged">google_managed</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference">NetworkServicesAgentGatewayGoogleManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference">NetworkServicesAgentGatewayNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference">NetworkServicesAgentGatewaySelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference">NetworkServicesAgentGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.googleManagedInput">google_managed_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.registriesInput">registries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.selfManagedInput">self_managed_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.registries">registries</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_gateway_card`<sup>Required</sup> <a name="agent_gateway_card" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.agentGatewayCard"></a>

```python
agent_gateway_card: NetworkServicesAgentGatewayAgentGatewayCardList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList">NetworkServicesAgentGatewayAgentGatewayCardList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `google_managed`<sup>Required</sup> <a name="google_managed" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.googleManaged"></a>

```python
google_managed: NetworkServicesAgentGatewayGoogleManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference">NetworkServicesAgentGatewayGoogleManagedOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.networkConfig"></a>

```python
network_config: NetworkServicesAgentGatewayNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference">NetworkServicesAgentGatewayNetworkConfigOutputReference</a>

---

##### `self_managed`<sup>Required</sup> <a name="self_managed" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.selfManaged"></a>

```python
self_managed: NetworkServicesAgentGatewaySelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference">NetworkServicesAgentGatewaySelfManagedOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.timeouts"></a>

```python
timeouts: NetworkServicesAgentGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference">NetworkServicesAgentGatewayTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `google_managed_input`<sup>Optional</sup> <a name="google_managed_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.googleManagedInput"></a>

```python
google_managed_input: NetworkServicesAgentGatewayGoogleManaged
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.networkConfigInput"></a>

```python
network_config_input: NetworkServicesAgentGatewayNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registries_input`<sup>Optional</sup> <a name="registries_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.registriesInput"></a>

```python
registries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_managed_input`<sup>Optional</sup> <a name="self_managed_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.selfManagedInput"></a>

```python
self_managed_input: NetworkServicesAgentGatewaySelfManaged
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkServicesAgentGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registries`<sup>Required</sup> <a name="registries" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.registries"></a>

```python
registries: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesAgentGatewayAgentGatewayCard <a name="NetworkServicesAgentGatewayAgentGatewayCard" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCard.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCard()
```


### NetworkServicesAgentGatewayConfig <a name="NetworkServicesAgentGatewayConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  google_managed: NetworkServicesAgentGatewayGoogleManaged = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network_config: NetworkServicesAgentGatewayNetworkConfig = None,
  project: str = None,
  protocols: typing.List[str] = None,
  registries: typing.List[str] = None,
  self_managed: NetworkServicesAgentGatewaySelfManaged = None,
  timeouts: NetworkServicesAgentGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.location">location</a></code> | <code>str</code> | The location of the agent gateway. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.name">name</a></code> | <code>str</code> | Name of the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.googleManaged">google_managed</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a></code> | google_managed block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#id NetworkServicesAgentGateway#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#project NetworkServicesAgentGateway#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | List of protocols supported by an Agent Gateway. Possible values: ["MCP"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.registries">registries</a></code> | <code>typing.List[str]</code> | A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the agent gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#location NetworkServicesAgentGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the AgentGateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#name NetworkServicesAgentGateway#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#deletion_policy NetworkServicesAgentGateway#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#description NetworkServicesAgentGateway#description}

---

##### `google_managed`<sup>Optional</sup> <a name="google_managed" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.googleManaged"></a>

```python
google_managed: NetworkServicesAgentGatewayGoogleManaged
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a>

google_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#google_managed NetworkServicesAgentGateway#google_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#id NetworkServicesAgentGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the AgentGateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#labels NetworkServicesAgentGateway#labels}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.networkConfig"></a>

```python
network_config: NetworkServicesAgentGatewayNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#network_config NetworkServicesAgentGateway#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#project NetworkServicesAgentGateway#project}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

List of protocols supported by an Agent Gateway. Possible values: ["MCP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#protocols NetworkServicesAgentGateway#protocols}

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.registries"></a>

```python
registries: typing.List[str]
```

- *Type:* typing.List[str]

A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway.

Note: Currently limited to project-scoped registries Must be of format
'//agentregistry.googleapis.com/{version}/projects/{{project}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#registries NetworkServicesAgentGateway#registries}

---

##### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.selfManaged"></a>

```python
self_managed: NetworkServicesAgentGatewaySelfManaged
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#self_managed NetworkServicesAgentGateway#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesAgentGatewayTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#timeouts NetworkServicesAgentGateway#timeouts}

---

### NetworkServicesAgentGatewayGoogleManaged <a name="NetworkServicesAgentGatewayGoogleManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged(
  governed_access_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath">governed_access_path</a></code> | <code>str</code> | Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"]. |

---

##### `governed_access_path`<sup>Required</sup> <a name="governed_access_path" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath"></a>

```python
governed_access_path: str
```

- *Type:* str

Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#governed_access_path NetworkServicesAgentGateway#governed_access_path}

---

### NetworkServicesAgentGatewayNetworkConfig <a name="NetworkServicesAgentGatewayNetworkConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig(
  egress: NetworkServicesAgentGatewayNetworkConfigEgress,
  dns_peering_config: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig.property.egress">egress</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a></code> | egress block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig.property.dnsPeeringConfig">dns_peering_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a></code> | dns_peering_config block. |

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig.property.egress"></a>

```python
egress: NetworkServicesAgentGatewayNetworkConfigEgress
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#egress NetworkServicesAgentGateway#egress}

---

##### `dns_peering_config`<sup>Optional</sup> <a name="dns_peering_config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig.property.dnsPeeringConfig"></a>

```python
dns_peering_config: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#dns_peering_config NetworkServicesAgentGateway#dns_peering_config}

---

### NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig <a name="NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig(
  domains: typing.List[str],
  target_network: str,
  target_project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.domains">domains</a></code> | <code>typing.List[str]</code> | The list of domain names to peer for DNS resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.targetNetwork">target_network</a></code> | <code>str</code> | The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.targetProject">target_project</a></code> | <code>str</code> | The ID of the project that hosts the target VPC network for DNS peering. |

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#domains NetworkServicesAgentGateway#domains}

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#target_network NetworkServicesAgentGateway#target_network}

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

The ID of the project that hosts the target VPC network for DNS peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#target_project NetworkServicesAgentGateway#target_project}

---

### NetworkServicesAgentGatewayNetworkConfigEgress <a name="NetworkServicesAgentGatewayNetworkConfigEgress" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress(
  network_attachment: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment">network_attachment</a></code> | <code>str</code> | The URI of the Network Attachment resource. |

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

The URI of the Network Attachment resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#network_attachment NetworkServicesAgentGateway#network_attachment}

---

### NetworkServicesAgentGatewaySelfManaged <a name="NetworkServicesAgentGatewaySelfManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged(
  resource_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged.property.resourceUri">resource_uri</a></code> | <code>str</code> | A supported Google Cloud networking proxy in the Project and Location. |

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

A supported Google Cloud networking proxy in the Project and Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#resource_uri NetworkServicesAgentGateway#resource_uri}

---

### NetworkServicesAgentGatewayTimeouts <a name="NetworkServicesAgentGatewayTimeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#create NetworkServicesAgentGateway#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#delete NetworkServicesAgentGateway#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#update NetworkServicesAgentGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#create NetworkServicesAgentGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#delete NetworkServicesAgentGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#update NetworkServicesAgentGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesAgentGatewayAgentGatewayCardList <a name="NetworkServicesAgentGatewayAgentGatewayCardList" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesAgentGatewayAgentGatewayCardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkServicesAgentGatewayAgentGatewayCardOutputReference <a name="NetworkServicesAgentGatewayAgentGatewayCardOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint">mtls_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates">root_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount">service_extensions_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCard">NetworkServicesAgentGatewayAgentGatewayCard</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mtls_endpoint`<sup>Required</sup> <a name="mtls_endpoint" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint"></a>

```python
mtls_endpoint: str
```

- *Type:* str

---

##### `root_certificates`<sup>Required</sup> <a name="root_certificates" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates"></a>

```python
root_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_extensions_service_account`<sup>Required</sup> <a name="service_extensions_service_account" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount"></a>

```python
service_extensions_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesAgentGatewayAgentGatewayCard
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCard">NetworkServicesAgentGatewayAgentGatewayCard</a>

---


### NetworkServicesAgentGatewayGoogleManagedOutputReference <a name="NetworkServicesAgentGatewayGoogleManagedOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput">governed_access_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath">governed_access_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `governed_access_path_input`<sup>Optional</sup> <a name="governed_access_path_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput"></a>

```python
governed_access_path_input: str
```

- *Type:* str

---

##### `governed_access_path`<sup>Required</sup> <a name="governed_access_path" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath"></a>

```python
governed_access_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesAgentGatewayGoogleManaged
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a>

---


### NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference <a name="NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput">target_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetProjectInput">target_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork">target_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetProject">target_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_network_input`<sup>Optional</sup> <a name="target_network_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput"></a>

```python
target_network_input: str
```

- *Type:* str

---

##### `target_project_input`<sup>Optional</sup> <a name="target_project_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetProjectInput"></a>

```python
target_project_input: str
```

- *Type:* str

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a>

---


### NetworkServicesAgentGatewayNetworkConfigEgressOutputReference <a name="NetworkServicesAgentGatewayNetworkConfigEgressOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesAgentGatewayNetworkConfigEgress
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a>

---


### NetworkServicesAgentGatewayNetworkConfigOutputReference <a name="NetworkServicesAgentGatewayNetworkConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putDnsPeeringConfig">put_dns_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress">put_egress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.resetDnsPeeringConfig">reset_dns_peering_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_peering_config` <a name="put_dns_peering_config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putDnsPeeringConfig"></a>

```python
def put_dns_peering_config(
  domains: typing.List[str],
  target_network: str,
  target_project: str
) -> None
```

###### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putDnsPeeringConfig.parameter.domains"></a>

- *Type:* typing.List[str]

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#domains NetworkServicesAgentGateway#domains}

---

###### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putDnsPeeringConfig.parameter.targetNetwork"></a>

- *Type:* str

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#target_network NetworkServicesAgentGateway#target_network}

---

###### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putDnsPeeringConfig.parameter.targetProject"></a>

- *Type:* str

The ID of the project that hosts the target VPC network for DNS peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#target_project NetworkServicesAgentGateway#target_project}

---

##### `put_egress` <a name="put_egress" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress"></a>

```python
def put_egress(
  network_attachment: str
) -> None
```

###### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress.parameter.networkAttachment"></a>

- *Type:* str

The URI of the Network Attachment resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/network_services_agent_gateway#network_attachment NetworkServicesAgentGateway#network_attachment}

---

##### `reset_dns_peering_config` <a name="reset_dns_peering_config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.resetDnsPeeringConfig"></a>

```python
def reset_dns_peering_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.dnsPeeringConfig">dns_peering_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference">NetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.dnsPeeringConfigInput">dns_peering_config_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput">egress_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_peering_config`<sup>Required</sup> <a name="dns_peering_config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.dnsPeeringConfig"></a>

```python
dns_peering_config: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference</a>

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress"></a>

```python
egress: NetworkServicesAgentGatewayNetworkConfigEgressOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference">NetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a>

---

##### `dns_peering_config_input`<sup>Optional</sup> <a name="dns_peering_config_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.dnsPeeringConfigInput"></a>

```python
dns_peering_config_input: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a>

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput"></a>

```python
egress_input: NetworkServicesAgentGatewayNetworkConfigEgress
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesAgentGatewayNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a>

---


### NetworkServicesAgentGatewaySelfManagedOutputReference <a name="NetworkServicesAgentGatewaySelfManagedOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput">resource_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri">resource_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_uri_input`<sup>Optional</sup> <a name="resource_uri_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput"></a>

```python
resource_uri_input: str
```

- *Type:* str

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesAgentGatewaySelfManaged
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a>

---


### NetworkServicesAgentGatewayTimeoutsOutputReference <a name="NetworkServicesAgentGatewayTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_gateway

networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesAgentGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a>

---



