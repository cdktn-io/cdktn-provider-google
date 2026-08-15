# `ephemeralGoogleServiceAccountKey` Submodule <a name="`ephemeralGoogleServiceAccountKey` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountKey <a name="EphemeralGoogleServiceAccountKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_key

ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  fetch_key: bool | IResolvable = None,
  key_algorithm: str = None,
  name: str = None,
  private_key: str = None,
  private_key_type: str = None,
  public_key_data: str = None,
  public_key_type: str = None,
  service_account_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.fetchKey">fetch_key</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to fetch the public key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | The algorithm used to generate the key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the service account key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | The private key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.privateKeyType">private_key_type</a></code> | <code>str</code> | The type of the private key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.publicKeyData">public_key_data</a></code> | <code>str</code> | The public key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.publicKeyType">public_key_type</a></code> | <code>str</code> | The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.serviceAccountId">service_account_id</a></code> | <code>str</code> | The ID of the parent service account of the key. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `fetch_key`<sup>Optional</sup> <a name="fetch_key" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.fetchKey"></a>

- *Type:* bool | cdktn.IResolvable

Whether to fetch the public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#fetch_key EphemeralGoogleServiceAccountKey#fetch_key}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.keyAlgorithm"></a>

- *Type:* str

The algorithm used to generate the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#key_algorithm EphemeralGoogleServiceAccountKey#key_algorithm}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.name"></a>

- *Type:* str

The name of the service account key.

This must have format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{KEYID}`, where `{ACCOUNT}` is the email address or unique id of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#name EphemeralGoogleServiceAccountKey#name}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.privateKey"></a>

- *Type:* str

The private key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#private_key EphemeralGoogleServiceAccountKey#private_key}

---

##### `private_key_type`<sup>Optional</sup> <a name="private_key_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.privateKeyType"></a>

- *Type:* str

The type of the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#private_key_type EphemeralGoogleServiceAccountKey#private_key_type}

---

##### `public_key_data`<sup>Optional</sup> <a name="public_key_data" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.publicKeyData"></a>

- *Type:* str

The public key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#public_key_data EphemeralGoogleServiceAccountKey#public_key_data}

---

##### `public_key_type`<sup>Optional</sup> <a name="public_key_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.publicKeyType"></a>

- *Type:* str

The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#public_key_type EphemeralGoogleServiceAccountKey#public_key_type}

---

##### `service_account_id`<sup>Optional</sup> <a name="service_account_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.serviceAccountId"></a>

- *Type:* str

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#service_account_id EphemeralGoogleServiceAccountKey#service_account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetFetchKey">reset_fetch_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetKeyAlgorithm">reset_key_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKeyType">reset_private_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyData">reset_public_key_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyType">reset_public_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetServiceAccountId">reset_service_account_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_fetch_key` <a name="reset_fetch_key" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetFetchKey"></a>

```python
def reset_fetch_key() -> None
```

##### `reset_key_algorithm` <a name="reset_key_algorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetKeyAlgorithm"></a>

```python
def reset_key_algorithm() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_private_key_type` <a name="reset_private_key_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKeyType"></a>

```python
def reset_private_key_type() -> None
```

##### `reset_public_key_data` <a name="reset_public_key_data" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyData"></a>

```python
def reset_public_key_data() -> None
```

##### `reset_public_key_type` <a name="reset_public_key_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyType"></a>

```python
def reset_public_key_type() -> None
```

##### `reset_service_account_id` <a name="reset_service_account_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetServiceAccountId"></a>

```python
def reset_service_account_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_key

ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_key

ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_key

ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKeyInput">fetch_key_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyTypeInput">private_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyDataInput">public_key_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyTypeInput">public_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountIdInput">service_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKey">fetch_key</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyType">private_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyData">public_key_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyType">public_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `fetch_key_input`<sup>Optional</sup> <a name="fetch_key_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKeyInput"></a>

```python
fetch_key_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `private_key_type_input`<sup>Optional</sup> <a name="private_key_type_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyTypeInput"></a>

```python
private_key_type_input: str
```

- *Type:* str

---

##### `public_key_data_input`<sup>Optional</sup> <a name="public_key_data_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyDataInput"></a>

```python
public_key_data_input: str
```

- *Type:* str

---

##### `public_key_type_input`<sup>Optional</sup> <a name="public_key_type_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyTypeInput"></a>

```python
public_key_type_input: str
```

- *Type:* str

---

##### `service_account_id_input`<sup>Optional</sup> <a name="service_account_id_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountIdInput"></a>

```python
service_account_id_input: str
```

- *Type:* str

---

##### `fetch_key`<sup>Required</sup> <a name="fetch_key" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKey"></a>

```python
fetch_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_type`<sup>Required</sup> <a name="private_key_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyType"></a>

```python
private_key_type: str
```

- *Type:* str

---

##### `public_key_data`<sup>Required</sup> <a name="public_key_data" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyData"></a>

```python
public_key_data: str
```

- *Type:* str

---

##### `public_key_type`<sup>Required</sup> <a name="public_key_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyType"></a>

```python
public_key_type: str
```

- *Type:* str

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountKeyConfig <a name="EphemeralGoogleServiceAccountKeyConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.Initializer"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_key

ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  fetch_key: bool | IResolvable = None,
  key_algorithm: str = None,
  name: str = None,
  private_key: str = None,
  private_key_type: str = None,
  public_key_data: str = None,
  public_key_type: str = None,
  service_account_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.fetchKey">fetch_key</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to fetch the public key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | The algorithm used to generate the key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.name">name</a></code> | <code>str</code> | The name of the service account key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKey">private_key</a></code> | <code>str</code> | The private key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKeyType">private_key_type</a></code> | <code>str</code> | The type of the private key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyData">public_key_data</a></code> | <code>str</code> | The public key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyType">public_key_type</a></code> | <code>str</code> | The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | The ID of the parent service account of the key. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `fetch_key`<sup>Optional</sup> <a name="fetch_key" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.fetchKey"></a>

```python
fetch_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to fetch the public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#fetch_key EphemeralGoogleServiceAccountKey#fetch_key}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

The algorithm used to generate the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#key_algorithm EphemeralGoogleServiceAccountKey#key_algorithm}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the service account key.

This must have format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{KEYID}`, where `{ACCOUNT}` is the email address or unique id of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#name EphemeralGoogleServiceAccountKey#name}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

The private key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#private_key EphemeralGoogleServiceAccountKey#private_key}

---

##### `private_key_type`<sup>Optional</sup> <a name="private_key_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKeyType"></a>

```python
private_key_type: str
```

- *Type:* str

The type of the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#private_key_type EphemeralGoogleServiceAccountKey#private_key_type}

---

##### `public_key_data`<sup>Optional</sup> <a name="public_key_data" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyData"></a>

```python
public_key_data: str
```

- *Type:* str

The public key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#public_key_data EphemeralGoogleServiceAccountKey#public_key_data}

---

##### `public_key_type`<sup>Optional</sup> <a name="public_key_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyType"></a>

```python
public_key_type: str
```

- *Type:* str

The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#public_key_type EphemeralGoogleServiceAccountKey#public_key_type}

---

##### `service_account_id`<sup>Optional</sup> <a name="service_account_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_key#service_account_id EphemeralGoogleServiceAccountKey#service_account_id}

---



