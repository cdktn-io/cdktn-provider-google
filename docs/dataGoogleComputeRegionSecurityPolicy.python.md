# `dataGoogleComputeRegionSecurityPolicy` Submodule <a name="`dataGoogleComputeRegionSecurityPolicy` Submodule" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionSecurityPolicy <a name="DataGoogleComputeRegionSecurityPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy google_compute_region_security_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#id DataGoogleComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#project DataGoogleComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created Region Security Policy should reside. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#name DataGoogleComputeRegionSecurityPolicy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#id DataGoogleComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#project DataGoogleComputeRegionSecurityPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#region DataGoogleComputeRegionSecurityPolicy#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeRegionSecurityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isConstruct"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeRegionSecurityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeRegionSecurityPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeRegionSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.advancedOptionsConfig">advanced_options_config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig">ddos_protection_config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList">DataGoogleComputeRegionSecurityPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId">self_link_with_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.userDefinedFields">user_defined_fields</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `advanced_options_config`<sup>Required</sup> <a name="advanced_options_config" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.advancedOptionsConfig"></a>

```python
advanced_options_config: DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList</a>

---

##### `ddos_protection_config`<sup>Required</sup> <a name="ddos_protection_config" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig"></a>

```python
ddos_protection_config: DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.rules"></a>

```python
rules: DataGoogleComputeRegionSecurityPolicyRulesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList">DataGoogleComputeRegionSecurityPolicyRulesList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `self_link_with_policy_id`<sup>Required</sup> <a name="self_link_with_policy_id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId"></a>

```python
self_link_with_policy_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_defined_fields`<sup>Required</sup> <a name="user_defined_fields" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.userDefinedFields"></a>

```python
user_defined_fields: DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig()
```


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig()
```


### DataGoogleComputeRegionSecurityPolicyConfig <a name="DataGoogleComputeRegionSecurityPolicyConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#id DataGoogleComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#project DataGoogleComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created Region Security Policy should reside. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#name DataGoogleComputeRegionSecurityPolicy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#id DataGoogleComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#project DataGoogleComputeRegionSecurityPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#region DataGoogleComputeRegionSecurityPolicy#region}

---

### DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig <a name="DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig()
```


### DataGoogleComputeRegionSecurityPolicyRules <a name="DataGoogleComputeRegionSecurityPolicyRules" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules()
```


### DataGoogleComputeRegionSecurityPolicyRulesMatch <a name="DataGoogleComputeRegionSecurityPolicyRulesMatch" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch()
```


### DataGoogleComputeRegionSecurityPolicyRulesMatchConfig <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig()
```


### DataGoogleComputeRegionSecurityPolicyRulesMatchExpr <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchExpr" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr()
```


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch()
```


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields()
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig()
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion()
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie()
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader()
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam()
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri()
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions()
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold()
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs()
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold()
```


### DataGoogleComputeRegionSecurityPolicyUserDefinedFields <a name="DataGoogleComputeRegionSecurityPolicyUserDefinedFields" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">content_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_types`<sup>Required</sup> <a name="content_types" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```python
content_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">json_custom_config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">json_parsing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">user_ip_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_custom_config`<sup>Required</sup> <a name="json_custom_config" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```python
json_custom_config: DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a>

---

##### `json_parsing`<sup>Required</sup> <a name="json_parsing" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```python
json_parsing: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `user_ip_request_headers`<sup>Required</sup> <a name="user_ip_request_headers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```python
user_ip_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList <a name="DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection">ddos_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ddos_protection`<sup>Required</sup> <a name="ddos_protection" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection"></a>

```python
ddos_protection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesList <a name="DataGoogleComputeRegionSecurityPolicyRulesList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig">DataGoogleComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesMatchConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig">DataGoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchExprList <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchExprList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr">DataGoogleComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesMatchExpr
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr">DataGoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchList <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList">DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList">DataGoogleComputeRegionSecurityPolicyRulesMatchExprList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr">versioned_expr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch">DataGoogleComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.config"></a>

```python
config: DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList">DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr"></a>

```python
expr: DataGoogleComputeRegionSecurityPolicyRulesMatchExprList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList">DataGoogleComputeRegionSecurityPolicyRulesMatchExprList</a>

---

##### `versioned_expr`<sup>Required</sup> <a name="versioned_expr" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr"></a>

```python
versioned_expr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesMatch
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch">DataGoogleComputeRegionSecurityPolicyRulesMatch</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts">dest_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols">ip_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns">src_asns</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts">src_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes">src_region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields">user_defined_fields</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dest_ip_ranges`<sup>Required</sup> <a name="dest_ip_ranges" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ports`<sup>Required</sup> <a name="dest_ports" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts"></a>

```python
dest_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocols`<sup>Required</sup> <a name="ip_protocols" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols"></a>

```python
ip_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_asns`<sup>Required</sup> <a name="src_asns" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns"></a>

```python
src_asns: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ports`<sup>Required</sup> <a name="src_ports" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts"></a>

```python
src_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_region_codes`<sup>Required</sup> <a name="src_region_codes" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes"></a>

```python
src_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_defined_fields`<sup>Required</sup> <a name="user_defined_fields" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields"></a>

```python
user_defined_fields: DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.match">match</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList">DataGoogleComputeRegionSecurityPolicyRulesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch">network_match</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig">preconfigured_waf_config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preview">preview</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions">rate_limit_options</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules">DataGoogleComputeRegionSecurityPolicyRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.match"></a>

```python
match: DataGoogleComputeRegionSecurityPolicyRulesMatchList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList">DataGoogleComputeRegionSecurityPolicyRulesMatchList</a>

---

##### `network_match`<sup>Required</sup> <a name="network_match" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch"></a>

```python
network_match: DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList</a>

---

##### `preconfigured_waf_config`<sup>Required</sup> <a name="preconfigured_waf_config" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig"></a>

```python
preconfigured_waf_config: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList</a>

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preview"></a>

```python
preview: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_options`<sup>Required</sup> <a name="rate_limit_options" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions"></a>

```python
rate_limit_options: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRules
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules">DataGoogleComputeRegionSecurityPolicyRules</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie">request_cookie</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader">request_header</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">request_query_param</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri">request_uri</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">target_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">target_rule_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_cookie`<sup>Required</sup> <a name="request_cookie" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```python
request_cookie: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `request_header`<sup>Required</sup> <a name="request_header" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```python
request_header: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `request_query_param`<sup>Required</sup> <a name="request_query_param" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```python
request_query_param: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```python
request_uri: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `target_rule_ids`<sup>Required</sup> <a name="target_rule_ids" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```python
target_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_rule_set`<sup>Required</sup> <a name="target_rule_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```python
target_rule_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion"></a>

```python
exclusion: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec">interval_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_sec`<sup>Required</sup> <a name="interval_sec" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```python
interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">enforce_on_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">enforce_on_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforce_on_key_name`<sup>Required</sup> <a name="enforce_on_key_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```python
enforce_on_key_name: str
```

- *Type:* str

---

##### `enforce_on_key_type`<sup>Required</sup> <a name="enforce_on_key_type" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```python
enforce_on_key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec">ban_duration_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold">ban_threshold</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction">conform_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey">enforce_on_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">enforce_on_key_configs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName">enforce_on_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction">exceed_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ban_duration_sec`<sup>Required</sup> <a name="ban_duration_sec" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec"></a>

```python
ban_duration_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ban_threshold`<sup>Required</sup> <a name="ban_threshold" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold"></a>

```python
ban_threshold: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList</a>

---

##### `conform_action`<sup>Required</sup> <a name="conform_action" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction"></a>

```python
conform_action: str
```

- *Type:* str

---

##### `enforce_on_key`<sup>Required</sup> <a name="enforce_on_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```python
enforce_on_key: str
```

- *Type:* str

---

##### `enforce_on_key_configs`<sup>Required</sup> <a name="enforce_on_key_configs" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```python
enforce_on_key_configs: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `enforce_on_key_name`<sup>Required</sup> <a name="enforce_on_key_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```python
enforce_on_key_name: str
```

- *Type:* str

---

##### `exceed_action`<sup>Required</sup> <a name="exceed_action" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction"></a>

```python
exceed_action: str
```

- *Type:* str

---

##### `rate_limit_threshold`<sup>Required</sup> <a name="rate_limit_threshold" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">interval_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_sec`<sup>Required</sup> <a name="interval_sec" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```python
interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---


### DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList <a name="DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_security_policy

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base">base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask">mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields">DataGoogleComputeRegionSecurityPolicyUserDefinedFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base"></a>

```python
base: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask"></a>

```python
mask: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionSecurityPolicyUserDefinedFields
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields">DataGoogleComputeRegionSecurityPolicyUserDefinedFields</a>

---



