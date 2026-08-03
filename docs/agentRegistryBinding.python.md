# `agentRegistryBinding` Submodule <a name="`agentRegistryBinding` Submodule" id="@cdktn/provider-google.agentRegistryBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentRegistryBinding <a name="AgentRegistryBinding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding google_agent_registry_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_provider_binding: AgentRegistryBindingAuthProviderBinding,
  binding_id: str,
  location: str,
  source: AgentRegistryBindingSource,
  target: AgentRegistryBindingTarget,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: AgentRegistryBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.authProviderBinding">auth_provider_binding</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a></code> | auth_provider_binding block. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.bindingId">binding_id</a></code> | <code>str</code> | The name of the Binding. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Binding. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-defined display name for the Binding. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#id AgentRegistryBinding#id}. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#project AgentRegistryBinding#project}. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_provider_binding`<sup>Required</sup> <a name="auth_provider_binding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.authProviderBinding"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a>

auth_provider_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#auth_provider_binding AgentRegistryBinding#auth_provider_binding}

---

##### `binding_id`<sup>Required</sup> <a name="binding_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.bindingId"></a>

- *Type:* str

The name of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#binding_id AgentRegistryBinding#binding_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#location AgentRegistryBinding#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#source AgentRegistryBinding#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#target AgentRegistryBinding#target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#deletion_policy AgentRegistryBinding#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.description"></a>

- *Type:* str

The description of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#description AgentRegistryBinding#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.displayName"></a>

- *Type:* str

User-defined display name for the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#display_name AgentRegistryBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#id AgentRegistryBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#project AgentRegistryBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#timeouts AgentRegistryBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putAuthProviderBinding">put_auth_provider_binding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_provider_binding` <a name="put_auth_provider_binding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putAuthProviderBinding"></a>

```python
def put_auth_provider_binding(
  auth_provider: str,
  continue_uri: str = None,
  scopes: typing.List[str] = None
) -> None
```

###### `auth_provider`<sup>Required</sup> <a name="auth_provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putAuthProviderBinding.parameter.authProvider"></a>

- *Type:* str

The resource name of the target auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#auth_provider AgentRegistryBinding#auth_provider}

---

###### `continue_uri`<sup>Optional</sup> <a name="continue_uri" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putAuthProviderBinding.parameter.continueUri"></a>

- *Type:* str

The continue URI of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#continue_uri AgentRegistryBinding#continue_uri}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putAuthProviderBinding.parameter.scopes"></a>

- *Type:* typing.List[str]

The list of OAuth2 scopes of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#scopes AgentRegistryBinding#scopes}

---

##### `put_source` <a name="put_source" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putSource"></a>

```python
def put_source(
  identifier: str
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putSource.parameter.identifier"></a>

- *Type:* str

The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#identifier AgentRegistryBinding#identifier}

---

##### `put_target` <a name="put_target" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTarget"></a>

```python
def put_target(
  identifier: str
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTarget.parameter.identifier"></a>

- *Type:* str

The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#identifier AgentRegistryBinding#identifier}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#create AgentRegistryBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#delete AgentRegistryBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#update AgentRegistryBinding#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AgentRegistryBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isConstruct"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformElement"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformResource"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AgentRegistryBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AgentRegistryBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AgentRegistryBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AgentRegistryBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.authProviderBinding">auth_provider_binding</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference">AgentRegistryBindingAuthProviderBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference">AgentRegistryBindingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.target">target</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference">AgentRegistryBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference">AgentRegistryBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.authProviderBindingInput">auth_provider_binding_input</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.bindingIdInput">binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.sourceInput">source_input</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.targetInput">target_input</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.bindingId">binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_provider_binding`<sup>Required</sup> <a name="auth_provider_binding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.authProviderBinding"></a>

```python
auth_provider_binding: AgentRegistryBindingAuthProviderBindingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference">AgentRegistryBindingAuthProviderBindingOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.source"></a>

```python
source: AgentRegistryBindingSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference">AgentRegistryBindingSourceOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.target"></a>

```python
target: AgentRegistryBindingTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference">AgentRegistryBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.timeouts"></a>

```python
timeouts: AgentRegistryBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference">AgentRegistryBindingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `auth_provider_binding_input`<sup>Optional</sup> <a name="auth_provider_binding_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.authProviderBindingInput"></a>

```python
auth_provider_binding_input: AgentRegistryBindingAuthProviderBinding
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a>

---

##### `binding_id_input`<sup>Optional</sup> <a name="binding_id_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.bindingIdInput"></a>

```python
binding_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.sourceInput"></a>

```python
source_input: AgentRegistryBindingSource
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.targetInput"></a>

```python
target_input: AgentRegistryBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | AgentRegistryBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a>

---

##### `binding_id`<sup>Required</sup> <a name="binding_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.bindingId"></a>

```python
binding_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AgentRegistryBindingAuthProviderBinding <a name="AgentRegistryBindingAuthProviderBinding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBindingAuthProviderBinding(
  auth_provider: str,
  continue_uri: str = None,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.authProvider">auth_provider</a></code> | <code>str</code> | The resource name of the target auth provider. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.continueUri">continue_uri</a></code> | <code>str</code> | The continue URI of the auth provider. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The list of OAuth2 scopes of the auth provider. |

---

##### `auth_provider`<sup>Required</sup> <a name="auth_provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.authProvider"></a>

```python
auth_provider: str
```

- *Type:* str

The resource name of the target auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#auth_provider AgentRegistryBinding#auth_provider}

---

##### `continue_uri`<sup>Optional</sup> <a name="continue_uri" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.continueUri"></a>

```python
continue_uri: str
```

- *Type:* str

The continue URI of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#continue_uri AgentRegistryBinding#continue_uri}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The list of OAuth2 scopes of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#scopes AgentRegistryBinding#scopes}

---

### AgentRegistryBindingConfig <a name="AgentRegistryBindingConfig" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_provider_binding: AgentRegistryBindingAuthProviderBinding,
  binding_id: str,
  location: str,
  source: AgentRegistryBindingSource,
  target: AgentRegistryBindingTarget,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: AgentRegistryBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.authProviderBinding">auth_provider_binding</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a></code> | auth_provider_binding block. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.bindingId">binding_id</a></code> | <code>str</code> | The name of the Binding. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.description">description</a></code> | <code>str</code> | The description of the Binding. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.displayName">display_name</a></code> | <code>str</code> | User-defined display name for the Binding. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#id AgentRegistryBinding#id}. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#project AgentRegistryBinding#project}. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_provider_binding`<sup>Required</sup> <a name="auth_provider_binding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.authProviderBinding"></a>

```python
auth_provider_binding: AgentRegistryBindingAuthProviderBinding
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a>

auth_provider_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#auth_provider_binding AgentRegistryBinding#auth_provider_binding}

---

##### `binding_id`<sup>Required</sup> <a name="binding_id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.bindingId"></a>

```python
binding_id: str
```

- *Type:* str

The name of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#binding_id AgentRegistryBinding#binding_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#location AgentRegistryBinding#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.source"></a>

```python
source: AgentRegistryBindingSource
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#source AgentRegistryBinding#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.target"></a>

```python
target: AgentRegistryBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#target AgentRegistryBinding#target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#deletion_policy AgentRegistryBinding#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#description AgentRegistryBinding#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-defined display name for the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#display_name AgentRegistryBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#id AgentRegistryBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#project AgentRegistryBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.timeouts"></a>

```python
timeouts: AgentRegistryBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#timeouts AgentRegistryBinding#timeouts}

---

### AgentRegistryBindingSource <a name="AgentRegistryBindingSource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBindingSource(
  identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource.property.identifier">identifier</a></code> | <code>str</code> | The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#identifier AgentRegistryBinding#identifier}

---

### AgentRegistryBindingTarget <a name="AgentRegistryBindingTarget" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBindingTarget(
  identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget.property.identifier">identifier</a></code> | <code>str</code> | The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#identifier AgentRegistryBinding#identifier}

---

### AgentRegistryBindingTimeouts <a name="AgentRegistryBindingTimeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#create AgentRegistryBinding#create}. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#delete AgentRegistryBinding#delete}. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#update AgentRegistryBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#create AgentRegistryBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#delete AgentRegistryBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_binding#update AgentRegistryBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentRegistryBindingAuthProviderBindingOutputReference <a name="AgentRegistryBindingAuthProviderBindingOutputReference" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri">reset_continue_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_continue_uri` <a name="reset_continue_uri" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri"></a>

```python
def reset_continue_uri() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput">auth_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput">continue_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider">auth_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri">continue_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_provider_input`<sup>Optional</sup> <a name="auth_provider_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput"></a>

```python
auth_provider_input: str
```

- *Type:* str

---

##### `continue_uri_input`<sup>Optional</sup> <a name="continue_uri_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput"></a>

```python
continue_uri_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auth_provider`<sup>Required</sup> <a name="auth_provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider"></a>

```python
auth_provider: str
```

- *Type:* str

---

##### `continue_uri`<sup>Required</sup> <a name="continue_uri" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri"></a>

```python
continue_uri: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue"></a>

```python
internal_value: AgentRegistryBindingAuthProviderBinding
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a>

---


### AgentRegistryBindingSourceOutputReference <a name="AgentRegistryBindingSourceOutputReference" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBindingSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.internalValue"></a>

```python
internal_value: AgentRegistryBindingSource
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a>

---


### AgentRegistryBindingTargetOutputReference <a name="AgentRegistryBindingTargetOutputReference" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBindingTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.internalValue"></a>

```python
internal_value: AgentRegistryBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a>

---


### AgentRegistryBindingTimeoutsOutputReference <a name="AgentRegistryBindingTimeoutsOutputReference" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import agent_registry_binding

agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AgentRegistryBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a>

---



