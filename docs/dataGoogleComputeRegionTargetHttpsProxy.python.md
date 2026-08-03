# `dataGoogleComputeRegionTargetHttpsProxy` Submodule <a name="`dataGoogleComputeRegionTargetHttpsProxy` Submodule" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionTargetHttpsProxy <a name="DataGoogleComputeRegionTargetHttpsProxy" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy google_compute_region_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_target_https_proxy

dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy(
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
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#id DataGoogleComputeRegionTargetHttpsProxy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#project DataGoogleComputeRegionTargetHttpsProxy#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created target https proxy should reside. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#name DataGoogleComputeRegionTargetHttpsProxy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#id DataGoogleComputeRegionTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#project DataGoogleComputeRegionTargetHttpsProxy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#region DataGoogleComputeRegionTargetHttpsProxy#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeRegionTargetHttpsProxy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isConstruct"></a>

```python
from cdktn_provider_google import data_google_compute_region_target_https_proxy

dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_compute_region_target_https_proxy

dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_compute_region_target_https_proxy

dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_compute_region_target_https_proxy

dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeRegionTargetHttpsProxy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeRegionTargetHttpsProxy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeRegionTargetHttpsProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionTargetHttpsProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.certificateManagerCertificates">certificate_manager_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSec">http_keep_alive_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.proxyId">proxy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.sslCertificates">ssl_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.urlMap">url_map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `certificate_manager_certificates`<sup>Required</sup> <a name="certificate_manager_certificates" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.certificateManagerCertificates"></a>

```python
certificate_manager_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `http_keep_alive_timeout_sec`<sup>Required</sup> <a name="http_keep_alive_timeout_sec" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSec"></a>

```python
http_keep_alive_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_id`<sup>Required</sup> <a name="proxy_id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.proxyId"></a>

```python
proxy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `server_tls_policy`<sup>Required</sup> <a name="server_tls_policy" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.serverTlsPolicy"></a>

```python
server_tls_policy: str
```

- *Type:* str

---

##### `ssl_certificates`<sup>Required</sup> <a name="ssl_certificates" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.sslCertificates"></a>

```python
ssl_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssl_policy`<sup>Required</sup> <a name="ssl_policy" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.urlMap"></a>

```python
url_map: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionTargetHttpsProxyConfig <a name="DataGoogleComputeRegionTargetHttpsProxyConfig" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_region_target_https_proxy

dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig(
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
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#id DataGoogleComputeRegionTargetHttpsProxy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#project DataGoogleComputeRegionTargetHttpsProxy#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created target https proxy should reside. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#name DataGoogleComputeRegionTargetHttpsProxy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#id DataGoogleComputeRegionTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#project DataGoogleComputeRegionTargetHttpsProxy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRegionTargetHttpsProxy.DataGoogleComputeRegionTargetHttpsProxyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_region_target_https_proxy#region DataGoogleComputeRegionTargetHttpsProxy#region}

---



