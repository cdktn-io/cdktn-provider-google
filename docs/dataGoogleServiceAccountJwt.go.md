# `dataGoogleServiceAccountJwt` Submodule <a name="`dataGoogleServiceAccountJwt` Submodule" id="@cdktn/provider-google.dataGoogleServiceAccountJwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountJwt <a name="DataGoogleServiceAccountJwt" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/service_account_jwt google_service_account_jwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleserviceaccountjwt"

datagoogleserviceaccountjwt.NewDataGoogleServiceAccountJwt(scope Construct, id *string, config DataGoogleServiceAccountJwtConfig) DataGoogleServiceAccountJwt
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig">DataGoogleServiceAccountJwtConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig">DataGoogleServiceAccountJwtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetDelegates">ResetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetExpiresIn">ResetExpiresIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDelegates` <a name="ResetDelegates" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetDelegates"></a>

```go
func ResetDelegates()
```

##### `ResetExpiresIn` <a name="ResetExpiresIn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetExpiresIn"></a>

```go
func ResetExpiresIn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleServiceAccountJwt resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleserviceaccountjwt"

datagoogleserviceaccountjwt.DataGoogleServiceAccountJwt_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleserviceaccountjwt"

datagoogleserviceaccountjwt.DataGoogleServiceAccountJwt_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleserviceaccountjwt"

datagoogleserviceaccountjwt.DataGoogleServiceAccountJwt_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleserviceaccountjwt"

datagoogleserviceaccountjwt.DataGoogleServiceAccountJwt_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleServiceAccountJwt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleServiceAccountJwt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleServiceAccountJwt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/service_account_jwt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceAccountJwt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.jwt">Jwt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegatesInput">DelegatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresInInput">ExpiresInInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payloadInput">PayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccountInput">TargetServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegates">Delegates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresIn">ExpiresIn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payload">Payload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.jwt"></a>

```go
func Jwt() *string
```

- *Type:* *string

---

##### `DelegatesInput`<sup>Optional</sup> <a name="DelegatesInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegatesInput"></a>

```go
func DelegatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExpiresInInput`<sup>Optional</sup> <a name="ExpiresInInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresInInput"></a>

```go
func ExpiresInInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payloadInput"></a>

```go
func PayloadInput() *string
```

- *Type:* *string

---

##### `TargetServiceAccountInput`<sup>Optional</sup> <a name="TargetServiceAccountInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccountInput"></a>

```go
func TargetServiceAccountInput() *string
```

- *Type:* *string

---

##### `Delegates`<sup>Required</sup> <a name="Delegates" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegates"></a>

```go
func Delegates() *[]*string
```

- *Type:* *[]*string

---

##### `ExpiresIn`<sup>Required</sup> <a name="ExpiresIn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresIn"></a>

```go
func ExpiresIn() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payload"></a>

```go
func Payload() *string
```

- *Type:* *string

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccount"></a>

```go
func TargetServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountJwtConfig <a name="DataGoogleServiceAccountJwtConfig" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleserviceaccountjwt"

&datagoogleserviceaccountjwt.DataGoogleServiceAccountJwtConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Payload: *string,
	TargetServiceAccount: *string,
	Delegates: *[]*string,
	ExpiresIn: *f64,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.payload">Payload</a></code> | <code>*string</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.delegates">Delegates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.expiresIn">ExpiresIn</a></code> | <code>*f64</code> | Number of seconds until the JWT expires. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/service_account_jwt#id DataGoogleServiceAccountJwt#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.payload"></a>

```go
Payload *string
```

- *Type:* *string

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/service_account_jwt#payload DataGoogleServiceAccountJwt#payload}

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.targetServiceAccount"></a>

```go
TargetServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}.

---

##### `Delegates`<sup>Optional</sup> <a name="Delegates" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.delegates"></a>

```go
Delegates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}.

---

##### `ExpiresIn`<sup>Optional</sup> <a name="ExpiresIn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.expiresIn"></a>

```go
ExpiresIn *f64
```

- *Type:* *f64

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/service_account_jwt#expires_in DataGoogleServiceAccountJwt#expires_in}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/service_account_jwt#id DataGoogleServiceAccountJwt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



