# `iapAgentRegistryMcpServerIamMember` Submodule <a name="`iapAgentRegistryMcpServerIamMember` Submodule" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAgentRegistryMcpServerIamMember <a name="IapAgentRegistryMcpServerIamMember" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member google_iap_agent_registry_mcp_server_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer"></a>

```python
from cdktn_provider_google import iap_agent_registry_mcp_server_iam_member

iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mcp_server_id: str,
  member: str,
  role: str,
  condition: IapAgentRegistryMcpServerIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.mcpServerId">mcp_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#mcp_server_id IapAgentRegistryMcpServerIamMember#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#member IapAgentRegistryMcpServerIamMember#member}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#role IapAgentRegistryMcpServerIamMember#role}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#id IapAgentRegistryMcpServerIamMember#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#location IapAgentRegistryMcpServerIamMember#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#project IapAgentRegistryMcpServerIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mcp_server_id`<sup>Required</sup> <a name="mcp_server_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.mcpServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#mcp_server_id IapAgentRegistryMcpServerIamMember#mcp_server_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#member IapAgentRegistryMcpServerIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#role IapAgentRegistryMcpServerIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#condition IapAgentRegistryMcpServerIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#id IapAgentRegistryMcpServerIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#location IapAgentRegistryMcpServerIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#project IapAgentRegistryMcpServerIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#expression IapAgentRegistryMcpServerIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#title IapAgentRegistryMcpServerIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#description IapAgentRegistryMcpServerIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IapAgentRegistryMcpServerIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isConstruct"></a>

```python
from cdktn_provider_google import iap_agent_registry_mcp_server_iam_member

iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformElement"></a>

```python
from cdktn_provider_google import iap_agent_registry_mcp_server_iam_member

iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformResource"></a>

```python
from cdktn_provider_google import iap_agent_registry_mcp_server_iam_member

iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport"></a>

```python
from cdktn_provider_google import iap_agent_registry_mcp_server_iam_member

iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IapAgentRegistryMcpServerIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IapAgentRegistryMcpServerIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IapAgentRegistryMcpServerIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IapAgentRegistryMcpServerIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference">IapAgentRegistryMcpServerIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.mcpServerIdInput">mcp_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.mcpServerId">mcp_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.condition"></a>

```python
condition: IapAgentRegistryMcpServerIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference">IapAgentRegistryMcpServerIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.conditionInput"></a>

```python
condition_input: IapAgentRegistryMcpServerIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mcp_server_id_input`<sup>Optional</sup> <a name="mcp_server_id_input" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.mcpServerIdInput"></a>

```python
mcp_server_id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mcp_server_id`<sup>Required</sup> <a name="mcp_server_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.mcpServerId"></a>

```python
mcp_server_id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IapAgentRegistryMcpServerIamMemberCondition <a name="IapAgentRegistryMcpServerIamMemberCondition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.Initializer"></a>

```python
from cdktn_provider_google import iap_agent_registry_mcp_server_iam_member

iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#expression IapAgentRegistryMcpServerIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#title IapAgentRegistryMcpServerIamMember#title}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#description IapAgentRegistryMcpServerIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#expression IapAgentRegistryMcpServerIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#title IapAgentRegistryMcpServerIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#description IapAgentRegistryMcpServerIamMember#description}.

---

### IapAgentRegistryMcpServerIamMemberConfig <a name="IapAgentRegistryMcpServerIamMemberConfig" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.Initializer"></a>

```python
from cdktn_provider_google import iap_agent_registry_mcp_server_iam_member

iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mcp_server_id: str,
  member: str,
  role: str,
  condition: IapAgentRegistryMcpServerIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.mcpServerId">mcp_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#mcp_server_id IapAgentRegistryMcpServerIamMember#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#member IapAgentRegistryMcpServerIamMember#member}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#role IapAgentRegistryMcpServerIamMember#role}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#id IapAgentRegistryMcpServerIamMember#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#location IapAgentRegistryMcpServerIamMember#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#project IapAgentRegistryMcpServerIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mcp_server_id`<sup>Required</sup> <a name="mcp_server_id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.mcpServerId"></a>

```python
mcp_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#mcp_server_id IapAgentRegistryMcpServerIamMember#mcp_server_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#member IapAgentRegistryMcpServerIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#role IapAgentRegistryMcpServerIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.condition"></a>

```python
condition: IapAgentRegistryMcpServerIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#condition IapAgentRegistryMcpServerIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#id IapAgentRegistryMcpServerIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#location IapAgentRegistryMcpServerIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iap_agent_registry_mcp_server_iam_member#project IapAgentRegistryMcpServerIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAgentRegistryMcpServerIamMemberConditionOutputReference <a name="IapAgentRegistryMcpServerIamMemberConditionOutputReference" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iap_agent_registry_mcp_server_iam_member

iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: IapAgentRegistryMcpServerIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a>

---



