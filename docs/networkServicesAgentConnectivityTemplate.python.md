# `networkServicesAgentConnectivityTemplate` Submodule <a name="`networkServicesAgentConnectivityTemplate` Submodule" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesAgentConnectivityTemplate <a name="NetworkServicesAgentConnectivityTemplate" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template google_network_services_agent_connectivity_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_path: str,
  agent_connectivity_template_id: str,
  location: str,
  access_types: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  egress_network_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkServicesAgentConnectivityTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessPath">access_path</a></code> | <code>str</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.agentConnectivityTemplateId">agent_connectivity_template_id</a></code> | <code>str</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessTypes">access_types</a></code> | <code>typing.List[str]</code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.egressNetworkConfig">egress_network_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_path`<sup>Required</sup> <a name="access_path" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessPath"></a>

- *Type:* str

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_path NetworkServicesAgentConnectivityTemplate#access_path}

---

##### `agent_connectivity_template_id`<sup>Required</sup> <a name="agent_connectivity_template_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.agentConnectivityTemplateId"></a>

- *Type:* str

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#agent_connectivity_template_id NetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.location"></a>

- *Type:* str

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#location NetworkServicesAgentConnectivityTemplate#location}

---

##### `access_types`<sup>Optional</sup> <a name="access_types" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessTypes"></a>

- *Type:* typing.List[str]

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_types NetworkServicesAgentConnectivityTemplate#access_types}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#deletion_policy NetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#description NetworkServicesAgentConnectivityTemplate#description}

---

##### `egress_network_config`<sup>Optional</sup> <a name="egress_network_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.egressNetworkConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#egress_network_config NetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#labels NetworkServicesAgentConnectivityTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#timeouts NetworkServicesAgentConnectivityTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig">put_egress_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetAccessTypes">reset_access_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig">reset_egress_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_egress_network_config` <a name="put_egress_network_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig"></a>

```python
def put_egress_network_config(
  dns_peering_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig = None,
  network_attachment: str = None,
  tls_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig = None,
  vpc_egress: str = None
) -> None
```

###### `dns_peering_config`<sup>Optional</sup> <a name="dns_peering_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.dnsPeeringConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#dns_peering_config NetworkServicesAgentConnectivityTemplate#dns_peering_config}

---

###### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.networkAttachment"></a>

- *Type:* str

The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#network_attachment NetworkServicesAgentConnectivityTemplate#network_attachment}

---

###### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#tls_config NetworkServicesAgentConnectivityTemplate#tls_config}

---

###### `vpc_egress`<sup>Optional</sup> <a name="vpc_egress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.vpcEgress"></a>

- *Type:* str

The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#vpc_egress NetworkServicesAgentConnectivityTemplate#vpc_egress}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#create NetworkServicesAgentConnectivityTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#delete NetworkServicesAgentConnectivityTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#update NetworkServicesAgentConnectivityTemplate#update}.

---

##### `reset_access_types` <a name="reset_access_types" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetAccessTypes"></a>

```python
def reset_access_types() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_egress_network_config` <a name="reset_egress_network_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig"></a>

```python
def reset_egress_network_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesAgentConnectivityTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesAgentConnectivityTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesAgentConnectivityTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig">egress_network_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPathInput">access_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypesInput">access_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput">agent_connectivity_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput">egress_network_config_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPath">access_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypes">access_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId">agent_connectivity_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `egress_network_config`<sup>Required</sup> <a name="egress_network_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig"></a>

```python
egress_network_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeouts"></a>

```python
timeouts: NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_path_input`<sup>Optional</sup> <a name="access_path_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPathInput"></a>

```python
access_path_input: str
```

- *Type:* str

---

##### `access_types_input`<sup>Optional</sup> <a name="access_types_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypesInput"></a>

```python
access_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `agent_connectivity_template_id_input`<sup>Optional</sup> <a name="agent_connectivity_template_id_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput"></a>

```python
agent_connectivity_template_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `egress_network_config_input`<sup>Optional</sup> <a name="egress_network_config_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput"></a>

```python
egress_network_config_input: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkServicesAgentConnectivityTemplateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `access_path`<sup>Required</sup> <a name="access_path" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPath"></a>

```python
access_path: str
```

- *Type:* str

---

##### `access_types`<sup>Required</sup> <a name="access_types" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypes"></a>

```python
access_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `agent_connectivity_template_id`<sup>Required</sup> <a name="agent_connectivity_template_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId"></a>

```python
agent_connectivity_template_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesAgentConnectivityTemplateConfig <a name="NetworkServicesAgentConnectivityTemplateConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_path: str,
  agent_connectivity_template_id: str,
  location: str,
  access_types: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  egress_network_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkServicesAgentConnectivityTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessPath">access_path</a></code> | <code>str</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId">agent_connectivity_template_id</a></code> | <code>str</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.location">location</a></code> | <code>str</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessTypes">access_types</a></code> | <code>typing.List[str]</code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig">egress_network_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_path`<sup>Required</sup> <a name="access_path" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessPath"></a>

```python
access_path: str
```

- *Type:* str

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_path NetworkServicesAgentConnectivityTemplate#access_path}

---

##### `agent_connectivity_template_id`<sup>Required</sup> <a name="agent_connectivity_template_id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId"></a>

```python
agent_connectivity_template_id: str
```

- *Type:* str

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#agent_connectivity_template_id NetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#location NetworkServicesAgentConnectivityTemplate#location}

---

##### `access_types`<sup>Optional</sup> <a name="access_types" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessTypes"></a>

```python
access_types: typing.List[str]
```

- *Type:* typing.List[str]

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_types NetworkServicesAgentConnectivityTemplate#access_types}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#deletion_policy NetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#description NetworkServicesAgentConnectivityTemplate#description}

---

##### `egress_network_config`<sup>Optional</sup> <a name="egress_network_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig"></a>

```python
egress_network_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#egress_network_config NetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#labels NetworkServicesAgentConnectivityTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesAgentConnectivityTemplateTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#timeouts NetworkServicesAgentConnectivityTemplate#timeouts}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig(
  dns_peering_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig = None,
  network_attachment: str = None,
  tls_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig = None,
  vpc_egress: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig">dns_peering_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | dns_peering_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress">vpc_egress</a></code> | <code>str</code> | The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `dns_peering_config`<sup>Optional</sup> <a name="dns_peering_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig"></a>

```python
dns_peering_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#dns_peering_config NetworkServicesAgentConnectivityTemplate#dns_peering_config}

---

##### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#network_attachment NetworkServicesAgentConnectivityTemplate#network_attachment}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig"></a>

```python
tls_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#tls_config NetworkServicesAgentConnectivityTemplate#tls_config}

---

##### `vpc_egress`<sup>Optional</sup> <a name="vpc_egress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress"></a>

```python
vpc_egress: str
```

- *Type:* str

The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#vpc_egress NetworkServicesAgentConnectivityTemplate#vpc_egress}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig(
  target_network: str,
  domain: str = None,
  domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork">target_network</a></code> | <code>str</code> | The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain">domain</a></code> | <code>str</code> | The domain name to peer for DNS resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains">domains</a></code> | <code>typing.List[str]</code> | The list of domain names to peer for DNS resolution. |

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#target_network NetworkServicesAgentConnectivityTemplate#target_network}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The domain name to peer for DNS resolution.

Must be a fully
qualified domain name ending with a dot (for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#domain NetworkServicesAgentConnectivityTemplate#domain}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.'). At least one domain must be
specified between 'domain' and 'domains'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#domains NetworkServicesAgentConnectivityTemplate#domains}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig(
  additional_roots: str,
  trust_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots">additional_roots</a></code> | <code>str</code> | Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig">trust_config</a></code> | <code>str</code> | The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}. |

---

##### `additional_roots`<sup>Required</sup> <a name="additional_roots" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots"></a>

```python
additional_roots: str
```

- *Type:* str

Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#additional_roots NetworkServicesAgentConnectivityTemplate#additional_roots}

---

##### `trust_config`<sup>Optional</sup> <a name="trust_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig"></a>

```python
trust_config: str
```

- *Type:* str

The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#trust_config NetworkServicesAgentConnectivityTemplate#trust_config}

---

### NetworkServicesAgentConnectivityTemplateTimeouts <a name="NetworkServicesAgentConnectivityTemplateTimeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#create NetworkServicesAgentConnectivityTemplate#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#delete NetworkServicesAgentConnectivityTemplate#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#update NetworkServicesAgentConnectivityTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#create NetworkServicesAgentConnectivityTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#delete NetworkServicesAgentConnectivityTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#update NetworkServicesAgentConnectivityTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains">reset_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_domains` <a name="reset_domains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains"></a>

```python
def reset_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput">target_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork">target_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_network_input`<sup>Optional</sup> <a name="target_network_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput"></a>

```python
target_network_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---


### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig">put_dns_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig">reset_dns_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment">reset_network_attachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig">reset_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress">reset_vpc_egress</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_peering_config` <a name="put_dns_peering_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig"></a>

```python
def put_dns_peering_config(
  target_network: str,
  domain: str = None,
  domains: typing.List[str] = None
) -> None
```

###### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.targetNetwork"></a>

- *Type:* str

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#target_network NetworkServicesAgentConnectivityTemplate#target_network}

---

###### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.domain"></a>

- *Type:* str

The domain name to peer for DNS resolution.

Must be a fully
qualified domain name ending with a dot (for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#domain NetworkServicesAgentConnectivityTemplate#domain}

---

###### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.domains"></a>

- *Type:* typing.List[str]

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.'). At least one domain must be
specified between 'domain' and 'domains'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#domains NetworkServicesAgentConnectivityTemplate#domains}

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig"></a>

```python
def put_tls_config(
  additional_roots: str,
  trust_config: str = None
) -> None
```

###### `additional_roots`<sup>Required</sup> <a name="additional_roots" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig.parameter.additionalRoots"></a>

- *Type:* str

Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#additional_roots NetworkServicesAgentConnectivityTemplate#additional_roots}

---

###### `trust_config`<sup>Optional</sup> <a name="trust_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig.parameter.trustConfig"></a>

- *Type:* str

The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#trust_config NetworkServicesAgentConnectivityTemplate#trust_config}

---

##### `reset_dns_peering_config` <a name="reset_dns_peering_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig"></a>

```python
def reset_dns_peering_config() -> None
```

##### `reset_network_attachment` <a name="reset_network_attachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment"></a>

```python
def reset_network_attachment() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```

##### `reset_vpc_egress` <a name="reset_vpc_egress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress"></a>

```python
def reset_vpc_egress() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig">dns_peering_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput">dns_peering_config_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput">vpc_egress_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress">vpc_egress</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_peering_config`<sup>Required</sup> <a name="dns_peering_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig"></a>

```python
dns_peering_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig"></a>

```python
tls_config: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a>

---

##### `dns_peering_config_input`<sup>Optional</sup> <a name="dns_peering_config_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput"></a>

```python
dns_peering_config_input: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput"></a>

```python
tls_config_input: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `vpc_egress_input`<sup>Optional</sup> <a name="vpc_egress_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput"></a>

```python
vpc_egress_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `vpc_egress`<sup>Required</sup> <a name="vpc_egress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress"></a>

```python
vpc_egress: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---


### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig">reset_trust_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_trust_config` <a name="reset_trust_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig"></a>

```python
def reset_trust_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput">additional_roots_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput">trust_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots">additional_roots</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig">trust_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_roots_input`<sup>Optional</sup> <a name="additional_roots_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput"></a>

```python
additional_roots_input: str
```

- *Type:* str

---

##### `trust_config_input`<sup>Optional</sup> <a name="trust_config_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput"></a>

```python
trust_config_input: str
```

- *Type:* str

---

##### `additional_roots`<sup>Required</sup> <a name="additional_roots" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots"></a>

```python
additional_roots: str
```

- *Type:* str

---

##### `trust_config`<sup>Required</sup> <a name="trust_config" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig"></a>

```python
trust_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---


### NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference <a name="NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_agent_connectivity_template

networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesAgentConnectivityTemplateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---



