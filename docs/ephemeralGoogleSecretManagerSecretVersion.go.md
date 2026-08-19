# `ephemeralGoogleSecretManagerSecretVersion` Submodule <a name="`ephemeralGoogleSecretManagerSecretVersion` Submodule" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleSecretManagerSecretVersion <a name="EphemeralGoogleSecretManagerSecretVersion" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version google_secret_manager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgooglesecretmanagersecretversion"

ephemeralgooglesecretmanagersecretversion.NewEphemeralGoogleSecretManagerSecretVersion(scope Construct, id *string, config EphemeralGoogleSecretManagerSecretVersionConfig) EphemeralGoogleSecretManagerSecretVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig">EphemeralGoogleSecretManagerSecretVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig">EphemeralGoogleSecretManagerSecretVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetIsSecretDataBase64">ResetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetIsSecretDataBase64` <a name="ResetIsSecretDataBase64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetIsSecretDataBase64"></a>

```go
func ResetIsSecretDataBase64()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetProject"></a>

```go
func ResetProject()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgooglesecretmanagersecretversion"

ephemeralgooglesecretmanagersecretversion.EphemeralGoogleSecretManagerSecretVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgooglesecretmanagersecretversion"

ephemeralgooglesecretmanagersecretversion.EphemeralGoogleSecretManagerSecretVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgooglesecretmanagersecretversion"

ephemeralgooglesecretmanagersecretversion.EphemeralGoogleSecretManagerSecretVersion_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.destroyTime">DestroyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretData">SecretData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64Input">IsSecretDataBase64Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DestroyTime`<sup>Required</sup> <a name="DestroyTime" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.destroyTime"></a>

```go
func DestroyTime() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretData`<sup>Required</sup> <a name="SecretData" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretData"></a>

```go
func SecretData() *string
```

- *Type:* *string

---

##### `IsSecretDataBase64Input`<sup>Optional</sup> <a name="IsSecretDataBase64Input" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64Input"></a>

```go
func IsSecretDataBase64Input() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `IsSecretDataBase64`<sup>Required</sup> <a name="IsSecretDataBase64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64"></a>

```go
func IsSecretDataBase64() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleSecretManagerSecretVersionConfig <a name="EphemeralGoogleSecretManagerSecretVersionConfig" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgooglesecretmanagersecretversion"

&ephemeralgooglesecretmanagersecretversion.EphemeralGoogleSecretManagerSecretVersionConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Secret: *string,
	IsSecretDataBase64: interface{},
	Project: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.secret">Secret</a></code> | <code>*string</code> | The secret to get the secret version for. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>interface{}</code> | If true, the secret data returned will not get base64 decoded. Defaults to false. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.project">Project</a></code> | <code>*string</code> | The project to get the secret version for. If it is not provided, the provider project is used. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.version">Version</a></code> | <code>*string</code> | The version of the secret to get. If it is not provided, the latest version is retrieved. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The secret to get the secret version for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#secret EphemeralGoogleSecretManagerSecretVersion#secret}

---

##### `IsSecretDataBase64`<sup>Optional</sup> <a name="IsSecretDataBase64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.isSecretDataBase64"></a>

```go
IsSecretDataBase64 interface{}
```

- *Type:* interface{}

If true, the secret data returned will not get base64 decoded. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#is_secret_data_base64 EphemeralGoogleSecretManagerSecretVersion#is_secret_data_base64}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project to get the secret version for. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#project EphemeralGoogleSecretManagerSecretVersion#project}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version of the secret to get. If it is not provided, the latest version is retrieved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#version EphemeralGoogleSecretManagerSecretVersion#version}

---



