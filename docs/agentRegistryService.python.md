# `agentRegistryService` Submodule <a name="`agentRegistryService` Submodule" id="@cdktn/provider-google.agentRegistryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentRegistryService <a name="AgentRegistryService" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service google_agent_registry_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryService(
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
  service_id: str,
  agent_spec: AgentRegistryServiceAgentSpec = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  endpoint_spec: AgentRegistryServiceEndpointSpec = None,
  id: str = None,
  interfaces: IResolvable | typing.List[AgentRegistryServiceInterfaces] = None,
  mcp_server_spec: AgentRegistryServiceMcpServerSpec = None,
  project: str = None,
  timeouts: AgentRegistryServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | The name of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.agentSpec">agent_spec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | agent_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-defined display name for the Service. Can have a maximum length of 63 characters. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.endpointSpec">endpoint_spec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#id AgentRegistryService#id}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.interfaces">interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>]</code> | interfaces block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.mcpServerSpec">mcp_server_spec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | mcp_server_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#project AgentRegistryService#project}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#location AgentRegistryService#location}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.serviceId"></a>

- *Type:* str

The name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#service_id AgentRegistryService#service_id}

---

##### `agent_spec`<sup>Optional</sup> <a name="agent_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.agentSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

agent_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#agent_spec AgentRegistryService#agent_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#deletion_policy AgentRegistryService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.description"></a>

- *Type:* str

The description of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#description AgentRegistryService#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.displayName"></a>

- *Type:* str

User-defined display name for the Service. Can have a maximum length of 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#display_name AgentRegistryService#display_name}

---

##### `endpoint_spec`<sup>Optional</sup> <a name="endpoint_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.endpointSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#endpoint_spec AgentRegistryService#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#id AgentRegistryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaces`<sup>Optional</sup> <a name="interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.interfaces"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>]

interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#interfaces AgentRegistryService#interfaces}

---

##### `mcp_server_spec`<sup>Optional</sup> <a name="mcp_server_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.mcpServerSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

mcp_server_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#mcp_server_spec AgentRegistryService#mcp_server_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#project AgentRegistryService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#timeouts AgentRegistryService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec">put_agent_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec">put_endpoint_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces">put_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec">put_mcp_server_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetAgentSpec">reset_agent_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetEndpointSpec">reset_endpoint_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetInterfaces">reset_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetMcpServerSpec">reset_mcp_server_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_agent_spec` <a name="put_agent_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec"></a>

```python
def put_agent_spec(
  type: str,
  content: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec.parameter.type"></a>

- *Type:* str

The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

###### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec.parameter.content"></a>

- *Type:* str

The content of the Agent spec in the JSON format.

This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#content AgentRegistryService#content}

---

##### `put_endpoint_spec` <a name="put_endpoint_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec"></a>

```python
def put_endpoint_spec(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec.parameter.type"></a>

- *Type:* str

The type of the Endpoint spec content. Possible values: ["NO_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

##### `put_interfaces` <a name="put_interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces"></a>

```python
def put_interfaces(
  value: IResolvable | typing.List[AgentRegistryServiceInterfaces]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>]

---

##### `put_mcp_server_spec` <a name="put_mcp_server_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec"></a>

```python
def put_mcp_server_spec(
  type: str,
  content: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec.parameter.type"></a>

- *Type:* str

The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

###### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec.parameter.content"></a>

- *Type:* str

The content of the MCP Server spec. This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#content AgentRegistryService#content}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#create AgentRegistryService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#delete AgentRegistryService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#update AgentRegistryService#update}.

---

##### `reset_agent_spec` <a name="reset_agent_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetAgentSpec"></a>

```python
def reset_agent_spec() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_endpoint_spec` <a name="reset_endpoint_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetEndpointSpec"></a>

```python
def reset_endpoint_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interfaces` <a name="reset_interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetInterfaces"></a>

```python
def reset_interfaces() -> None
```

##### `reset_mcp_server_spec` <a name="reset_mcp_server_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetMcpServerSpec"></a>

```python
def reset_mcp_server_spec() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AgentRegistryService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AgentRegistryService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AgentRegistryService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AgentRegistryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AgentRegistryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpec">agent_spec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference">AgentRegistryServiceAgentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpec">endpoint_spec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference">AgentRegistryServiceEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfaces">interfaces</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList">AgentRegistryServiceInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpec">mcp_server_spec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference">AgentRegistryServiceMcpServerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.registryResource">registry_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference">AgentRegistryServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpecInput">agent_spec_input</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpecInput">endpoint_spec_input</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfacesInput">interfaces_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpecInput">mcp_server_spec_input</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_spec`<sup>Required</sup> <a name="agent_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpec"></a>

```python
agent_spec: AgentRegistryServiceAgentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference">AgentRegistryServiceAgentSpecOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint_spec`<sup>Required</sup> <a name="endpoint_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpec"></a>

```python
endpoint_spec: AgentRegistryServiceEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference">AgentRegistryServiceEndpointSpecOutputReference</a>

---

##### `interfaces`<sup>Required</sup> <a name="interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfaces"></a>

```python
interfaces: AgentRegistryServiceInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList">AgentRegistryServiceInterfacesList</a>

---

##### `mcp_server_spec`<sup>Required</sup> <a name="mcp_server_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpec"></a>

```python
mcp_server_spec: AgentRegistryServiceMcpServerSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference">AgentRegistryServiceMcpServerSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `registry_resource`<sup>Required</sup> <a name="registry_resource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.registryResource"></a>

```python
registry_resource: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeouts"></a>

```python
timeouts: AgentRegistryServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference">AgentRegistryServiceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `agent_spec_input`<sup>Optional</sup> <a name="agent_spec_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpecInput"></a>

```python
agent_spec_input: AgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_spec_input`<sup>Optional</sup> <a name="endpoint_spec_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpecInput"></a>

```python
endpoint_spec_input: AgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interfaces_input`<sup>Optional</sup> <a name="interfaces_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfacesInput"></a>

```python
interfaces_input: IResolvable | typing.List[AgentRegistryServiceInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mcp_server_spec_input`<sup>Optional</sup> <a name="mcp_server_spec_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpecInput"></a>

```python
mcp_server_spec_input: AgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | AgentRegistryServiceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AgentRegistryServiceAgentSpec <a name="AgentRegistryServiceAgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceAgentSpec(
  type: str,
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.type">type</a></code> | <code>str</code> | The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.content">content</a></code> | <code>str</code> | The content of the Agent spec in the JSON format. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.content"></a>

```python
content: str
```

- *Type:* str

The content of the Agent spec in the JSON format.

This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#content AgentRegistryService#content}

---

### AgentRegistryServiceConfig <a name="AgentRegistryServiceConfig" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  service_id: str,
  agent_spec: AgentRegistryServiceAgentSpec = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  endpoint_spec: AgentRegistryServiceEndpointSpec = None,
  id: str = None,
  interfaces: IResolvable | typing.List[AgentRegistryServiceInterfaces] = None,
  mcp_server_spec: AgentRegistryServiceMcpServerSpec = None,
  project: str = None,
  timeouts: AgentRegistryServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.serviceId">service_id</a></code> | <code>str</code> | The name of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.agentSpec">agent_spec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | agent_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.description">description</a></code> | <code>str</code> | The description of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.displayName">display_name</a></code> | <code>str</code> | User-defined display name for the Service. Can have a maximum length of 63 characters. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.endpointSpec">endpoint_spec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#id AgentRegistryService#id}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.interfaces">interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>]</code> | interfaces block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.mcpServerSpec">mcp_server_spec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | mcp_server_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#project AgentRegistryService#project}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#location AgentRegistryService#location}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#service_id AgentRegistryService#service_id}

---

##### `agent_spec`<sup>Optional</sup> <a name="agent_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.agentSpec"></a>

```python
agent_spec: AgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

agent_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#agent_spec AgentRegistryService#agent_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#deletion_policy AgentRegistryService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#description AgentRegistryService#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-defined display name for the Service. Can have a maximum length of 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#display_name AgentRegistryService#display_name}

---

##### `endpoint_spec`<sup>Optional</sup> <a name="endpoint_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.endpointSpec"></a>

```python
endpoint_spec: AgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#endpoint_spec AgentRegistryService#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#id AgentRegistryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaces`<sup>Optional</sup> <a name="interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.interfaces"></a>

```python
interfaces: IResolvable | typing.List[AgentRegistryServiceInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>]

interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#interfaces AgentRegistryService#interfaces}

---

##### `mcp_server_spec`<sup>Optional</sup> <a name="mcp_server_spec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.mcpServerSpec"></a>

```python
mcp_server_spec: AgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

mcp_server_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#mcp_server_spec AgentRegistryService#mcp_server_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#project AgentRegistryService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.timeouts"></a>

```python
timeouts: AgentRegistryServiceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#timeouts AgentRegistryService#timeouts}

---

### AgentRegistryServiceEndpointSpec <a name="AgentRegistryServiceEndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceEndpointSpec(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.property.type">type</a></code> | <code>str</code> | The type of the Endpoint spec content. Possible values: ["NO_SPEC"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the Endpoint spec content. Possible values: ["NO_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

### AgentRegistryServiceInterfaces <a name="AgentRegistryServiceInterfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceInterfaces(
  protocol_binding: str,
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.protocolBinding">protocol_binding</a></code> | <code>str</code> | The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.url">url</a></code> | <code>str</code> | The destination URL. |

---

##### `protocol_binding`<sup>Required</sup> <a name="protocol_binding" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.protocolBinding"></a>

```python
protocol_binding: str
```

- *Type:* str

The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#protocol_binding AgentRegistryService#protocol_binding}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.url"></a>

```python
url: str
```

- *Type:* str

The destination URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#url AgentRegistryService#url}

---

### AgentRegistryServiceMcpServerSpec <a name="AgentRegistryServiceMcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceMcpServerSpec(
  type: str,
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.type">type</a></code> | <code>str</code> | The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.content">content</a></code> | <code>str</code> | The content of the MCP Server spec. This payload is validated against the schema for the specified type. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.content"></a>

```python
content: str
```

- *Type:* str

The content of the MCP Server spec. This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#content AgentRegistryService#content}

---

### AgentRegistryServiceTimeouts <a name="AgentRegistryServiceTimeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#create AgentRegistryService#create}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#delete AgentRegistryService#delete}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#update AgentRegistryService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#create AgentRegistryService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#delete AgentRegistryService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_registry_service#update AgentRegistryService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentRegistryServiceAgentSpecOutputReference <a name="AgentRegistryServiceAgentSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceAgentSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.internalValue"></a>

```python
internal_value: AgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---


### AgentRegistryServiceEndpointSpecOutputReference <a name="AgentRegistryServiceEndpointSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.internalValue"></a>

```python
internal_value: AgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---


### AgentRegistryServiceInterfacesList <a name="AgentRegistryServiceInterfacesList" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AgentRegistryServiceInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AgentRegistryServiceInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>]

---


### AgentRegistryServiceInterfacesOutputReference <a name="AgentRegistryServiceInterfacesOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput">protocol_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBinding">protocol_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocol_binding_input`<sup>Optional</sup> <a name="protocol_binding_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput"></a>

```python
protocol_binding_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `protocol_binding`<sup>Required</sup> <a name="protocol_binding" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBinding"></a>

```python
protocol_binding: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AgentRegistryServiceInterfaces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>

---


### AgentRegistryServiceMcpServerSpecOutputReference <a name="AgentRegistryServiceMcpServerSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.internalValue"></a>

```python
internal_value: AgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---


### AgentRegistryServiceTimeoutsOutputReference <a name="AgentRegistryServiceTimeoutsOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_service

agentRegistryService.AgentRegistryServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AgentRegistryServiceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

---



