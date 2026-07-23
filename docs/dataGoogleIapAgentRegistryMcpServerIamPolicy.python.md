# `dataGoogleIapAgentRegistryMcpServerIamPolicy` Submodule <a name="`dataGoogleIapAgentRegistryMcpServerIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIapAgentRegistryMcpServerIamPolicy <a name="DataGoogleIapAgentRegistryMcpServerIamPolicy" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy google_iap_agent_registry_mcp_server_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer"></a>

```python
from cdktn_provider_google import data_google_iap_agent_registry_mcp_server_iam_policy

dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy(
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
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.mcpServerId">mcp_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#mcp_server_id DataGoogleIapAgentRegistryMcpServerIamPolicy#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#id DataGoogleIapAgentRegistryMcpServerIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#location DataGoogleIapAgentRegistryMcpServerIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#project DataGoogleIapAgentRegistryMcpServerIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mcp_server_id`<sup>Required</sup> <a name="mcp_server_id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.mcpServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#mcp_server_id DataGoogleIapAgentRegistryMcpServerIamPolicy#mcp_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#id DataGoogleIapAgentRegistryMcpServerIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#location DataGoogleIapAgentRegistryMcpServerIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#project DataGoogleIapAgentRegistryMcpServerIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleIapAgentRegistryMcpServerIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.isConstruct"></a>

```python
from cdktn_provider_google import data_google_iap_agent_registry_mcp_server_iam_policy

dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_iap_agent_registry_mcp_server_iam_policy

dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_iap_agent_registry_mcp_server_iam_policy

dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_iap_agent_registry_mcp_server_iam_policy

dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleIapAgentRegistryMcpServerIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleIapAgentRegistryMcpServerIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleIapAgentRegistryMcpServerIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIapAgentRegistryMcpServerIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.mcpServerIdInput">mcp_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.mcpServerId">mcp_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mcp_server_id_input`<sup>Optional</sup> <a name="mcp_server_id_input" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.mcpServerIdInput"></a>

```python
mcp_server_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mcp_server_id`<sup>Required</sup> <a name="mcp_server_id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.mcpServerId"></a>

```python
mcp_server_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIapAgentRegistryMcpServerIamPolicyConfig <a name="DataGoogleIapAgentRegistryMcpServerIamPolicyConfig" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_iap_agent_registry_mcp_server_iam_policy

dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mcp_server_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.mcpServerId">mcp_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#mcp_server_id DataGoogleIapAgentRegistryMcpServerIamPolicy#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#id DataGoogleIapAgentRegistryMcpServerIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#location DataGoogleIapAgentRegistryMcpServerIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#project DataGoogleIapAgentRegistryMcpServerIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mcp_server_id`<sup>Required</sup> <a name="mcp_server_id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.mcpServerId"></a>

```python
mcp_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#mcp_server_id DataGoogleIapAgentRegistryMcpServerIamPolicy#mcp_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#id DataGoogleIapAgentRegistryMcpServerIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#location DataGoogleIapAgentRegistryMcpServerIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleIapAgentRegistryMcpServerIamPolicy.DataGoogleIapAgentRegistryMcpServerIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/iap_agent_registry_mcp_server_iam_policy#project DataGoogleIapAgentRegistryMcpServerIamPolicy#project}.

---



