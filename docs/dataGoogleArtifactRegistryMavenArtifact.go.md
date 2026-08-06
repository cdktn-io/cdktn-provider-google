# `dataGoogleArtifactRegistryMavenArtifact` Submodule <a name="`dataGoogleArtifactRegistryMavenArtifact` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryMavenArtifact <a name="DataGoogleArtifactRegistryMavenArtifact" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact google_artifact_registry_maven_artifact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistrymavenartifact"

datagoogleartifactregistrymavenartifact.NewDataGoogleArtifactRegistryMavenArtifact(scope Construct, id *string, config DataGoogleArtifactRegistryMavenArtifactConfig) DataGoogleArtifactRegistryMavenArtifact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig">DataGoogleArtifactRegistryMavenArtifactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig">DataGoogleArtifactRegistryMavenArtifactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifact resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistrymavenartifact"

datagoogleartifactregistrymavenartifact.DataGoogleArtifactRegistryMavenArtifact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistrymavenartifact"

datagoogleartifactregistrymavenartifact.DataGoogleArtifactRegistryMavenArtifact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistrymavenartifact"

datagoogleartifactregistrymavenartifact.DataGoogleArtifactRegistryMavenArtifact_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistrymavenartifact"

datagoogleartifactregistrymavenartifact.DataGoogleArtifactRegistryMavenArtifact_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleArtifactRegistryMavenArtifact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleArtifactRegistryMavenArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryMavenArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.pomUri">PomUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PomUri`<sup>Required</sup> <a name="PomUri" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.pomUri"></a>

```go
func PomUri() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryMavenArtifactConfig <a name="DataGoogleArtifactRegistryMavenArtifactConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistrymavenartifact"

&datagoogleartifactregistrymavenartifact.DataGoogleArtifactRegistryMavenArtifactConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactId: *string,
	GroupId: *string,
	Location: *string,
	RepositoryId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.artifactId">ArtifactId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#artifact_id DataGoogleArtifactRegistryMavenArtifact#artifact_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#group_id DataGoogleArtifactRegistryMavenArtifact#group_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#location DataGoogleArtifactRegistryMavenArtifact#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#repository_id DataGoogleArtifactRegistryMavenArtifact#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#id DataGoogleArtifactRegistryMavenArtifact#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#project DataGoogleArtifactRegistryMavenArtifact#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#artifact_id DataGoogleArtifactRegistryMavenArtifact#artifact_id}.

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#group_id DataGoogleArtifactRegistryMavenArtifact#group_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#location DataGoogleArtifactRegistryMavenArtifact#location}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#repository_id DataGoogleArtifactRegistryMavenArtifact#repository_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#id DataGoogleArtifactRegistryMavenArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifact.DataGoogleArtifactRegistryMavenArtifactConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_maven_artifact#project DataGoogleArtifactRegistryMavenArtifact#project}.

---



