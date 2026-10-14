# `dataGoogleGeminiDataAnalyticsDataAgentIamPolicy` Submodule <a name="`dataGoogleGeminiDataAnalyticsDataAgentIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleGeminiDataAnalyticsDataAgentIamPolicy <a name="DataGoogleGeminiDataAnalyticsDataAgentIamPolicy" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy google_gemini_data_analytics_data_agent_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer"></a>

```python
from cdktn_provider_google import data_google_gemini_data_analytics_data_agent_iam_policy

dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_agent_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.dataAgentId">data_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#data_agent_id DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#data_agent_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#id DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#location DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#project DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_agent_id`<sup>Required</sup> <a name="data_agent_id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.dataAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#data_agent_id DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#data_agent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#id DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#location DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#project DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleGeminiDataAnalyticsDataAgentIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.isConstruct"></a>

```python
from cdktn_provider_google import data_google_gemini_data_analytics_data_agent_iam_policy

dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_gemini_data_analytics_data_agent_iam_policy

dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_gemini_data_analytics_data_agent_iam_policy

dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_gemini_data_analytics_data_agent_iam_policy

dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleGeminiDataAnalyticsDataAgentIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleGeminiDataAnalyticsDataAgentIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleGeminiDataAnalyticsDataAgentIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleGeminiDataAnalyticsDataAgentIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.dataAgentIdInput">data_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.dataAgentId">data_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `data_agent_id_input`<sup>Optional</sup> <a name="data_agent_id_input" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.dataAgentIdInput"></a>

```python
data_agent_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `data_agent_id`<sup>Required</sup> <a name="data_agent_id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.dataAgentId"></a>

```python
data_agent_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig <a name="DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_gemini_data_analytics_data_agent_iam_policy

dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_agent_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.dataAgentId">data_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#data_agent_id DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#data_agent_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#id DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#location DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#project DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_agent_id`<sup>Required</sup> <a name="data_agent_id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.dataAgentId"></a>

```python
data_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#data_agent_id DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#data_agent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#id DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#location DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleGeminiDataAnalyticsDataAgentIamPolicy.DataGoogleGeminiDataAnalyticsDataAgentIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/data-sources/gemini_data_analytics_data_agent_iam_policy#project DataGoogleGeminiDataAnalyticsDataAgentIamPolicy#project}.

---



