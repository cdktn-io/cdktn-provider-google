# `ephemeralGoogleServiceAccountAccessToken` Submodule <a name="`ephemeralGoogleServiceAccountAccessToken` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountAccessToken <a name="EphemeralGoogleServiceAccountAccessToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token google_service_account_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_access_token

ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  scopes: typing.List[str],
  target_service_account: str,
  delegates: typing.List[str] = None,
  lifetime: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | The scopes the new credential should have (e.g. `['cloud-platform']`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.targetServiceAccount">target_service_account</a></code> | <code>str</code> | The service account to impersonate (e.g. `service_B@your-project-id.iam.gserviceaccount.com`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.delegates">delegates</a></code> | <code>typing.List[str]</code> | Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.  (e.g. `['projects/-/serviceAccounts/delegate-svc-account@project-id.iam.gserviceaccount.com']`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.lifetime">lifetime</a></code> | <code>str</code> | Lifetime of the impersonated token (defaults to its max: `3600s`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

The scopes the new credential should have (e.g. `['cloud-platform']`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#scopes EphemeralGoogleServiceAccountAccessToken#scopes}

---

##### `target_service_account`<sup>Required</sup> <a name="target_service_account" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.targetServiceAccount"></a>

- *Type:* str

The service account to impersonate (e.g. `service_B@your-project-id.iam.gserviceaccount.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#target_service_account EphemeralGoogleServiceAccountAccessToken#target_service_account}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.delegates"></a>

- *Type:* typing.List[str]

Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.  (e.g. `['projects/-/serviceAccounts/delegate-svc-account@project-id.iam.gserviceaccount.com']`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#delegates EphemeralGoogleServiceAccountAccessToken#delegates}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.lifetime"></a>

- *Type:* str

Lifetime of the impersonated token (defaults to its max: `3600s`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#lifetime EphemeralGoogleServiceAccountAccessToken#lifetime}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetDelegates">reset_delegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetLifetime">reset_lifetime</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_delegates` <a name="reset_delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetDelegates"></a>

```python
def reset_delegates() -> None
```

##### `reset_lifetime` <a name="reset_lifetime" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetLifetime"></a>

```python
def reset_lifetime() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isConstruct"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_access_token

ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformElement"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_access_token

ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_access_token

ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegatesInput">delegates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetimeInput">lifetime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccountInput">target_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegates">delegates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetime">lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccount">target_service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `delegates_input`<sup>Optional</sup> <a name="delegates_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegatesInput"></a>

```python
delegates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifetime_input`<sup>Optional</sup> <a name="lifetime_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetimeInput"></a>

```python
lifetime_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_service_account_input`<sup>Optional</sup> <a name="target_service_account_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccountInput"></a>

```python
target_service_account_input: str
```

- *Type:* str

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegates"></a>

```python
delegates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetime"></a>

```python
lifetime: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_service_account`<sup>Required</sup> <a name="target_service_account" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccount"></a>

```python
target_service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountAccessTokenConfig <a name="EphemeralGoogleServiceAccountAccessTokenConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.Initializer"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_access_token

ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  scopes: typing.List[str],
  target_service_account: str,
  delegates: typing.List[str] = None,
  lifetime: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The scopes the new credential should have (e.g. `['cloud-platform']`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.targetServiceAccount">target_service_account</a></code> | <code>str</code> | The service account to impersonate (e.g. `service_B@your-project-id.iam.gserviceaccount.com`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.delegates">delegates</a></code> | <code>typing.List[str]</code> | Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.  (e.g. `['projects/-/serviceAccounts/delegate-svc-account@project-id.iam.gserviceaccount.com']`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifetime">lifetime</a></code> | <code>str</code> | Lifetime of the impersonated token (defaults to its max: `3600s`). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The scopes the new credential should have (e.g. `['cloud-platform']`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#scopes EphemeralGoogleServiceAccountAccessToken#scopes}

---

##### `target_service_account`<sup>Required</sup> <a name="target_service_account" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.targetServiceAccount"></a>

```python
target_service_account: str
```

- *Type:* str

The service account to impersonate (e.g. `service_B@your-project-id.iam.gserviceaccount.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#target_service_account EphemeralGoogleServiceAccountAccessToken#target_service_account}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.delegates"></a>

```python
delegates: typing.List[str]
```

- *Type:* typing.List[str]

Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.  (e.g. `['projects/-/serviceAccounts/delegate-svc-account@project-id.iam.gserviceaccount.com']`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#delegates EphemeralGoogleServiceAccountAccessToken#delegates}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifetime"></a>

```python
lifetime: str
```

- *Type:* str

Lifetime of the impersonated token (defaults to its max: `3600s`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#lifetime EphemeralGoogleServiceAccountAccessToken#lifetime}

---



