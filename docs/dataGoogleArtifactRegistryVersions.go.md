# `dataGoogleArtifactRegistryVersions` Submodule <a name="`dataGoogleArtifactRegistryVersions` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryVersions <a name="DataGoogleArtifactRegistryVersions" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions google_artifact_registry_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

datagoogleartifactregistryversions.NewDataGoogleArtifactRegistryVersions(scope Construct, id *string, config DataGoogleArtifactRegistryVersionsConfig) DataGoogleArtifactRegistryVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig">DataGoogleArtifactRegistryVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig">DataGoogleArtifactRegistryVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetProject"></a>

```go
func ResetProject()
```

##### `ResetView` <a name="ResetView" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetView"></a>

```go
func ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryVersions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

datagoogleartifactregistryversions.DataGoogleArtifactRegistryVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

datagoogleartifactregistryversions.DataGoogleArtifactRegistryVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

datagoogleartifactregistryversions.DataGoogleArtifactRegistryVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

datagoogleartifactregistryversions.DataGoogleArtifactRegistryVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleArtifactRegistryVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleArtifactRegistryVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.versions">Versions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList">DataGoogleArtifactRegistryVersionsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageNameInput">PackageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.viewInput">ViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageName">PackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.view">View</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.versions"></a>

```go
func Versions() DataGoogleArtifactRegistryVersionsVersionsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList">DataGoogleArtifactRegistryVersionsVersionsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageNameInput"></a>

```go
func PackageNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.viewInput"></a>

```go
func ViewInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageName"></a>

```go
func PackageName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.view"></a>

```go
func View() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryVersionsConfig <a name="DataGoogleArtifactRegistryVersionsConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

&datagoogleartifactregistryversions.DataGoogleArtifactRegistryVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	PackageName: *string,
	RepositoryId: *string,
	Filter: *string,
	Id: *string,
	Project: *string,
	View: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#location DataGoogleArtifactRegistryVersions#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.packageName">PackageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#package_name DataGoogleArtifactRegistryVersions#package_name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#repository_id DataGoogleArtifactRegistryVersions#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#filter DataGoogleArtifactRegistryVersions#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#id DataGoogleArtifactRegistryVersions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#project DataGoogleArtifactRegistryVersions#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.view">View</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#view DataGoogleArtifactRegistryVersions#view}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#location DataGoogleArtifactRegistryVersions#location}.

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.packageName"></a>

```go
PackageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#package_name DataGoogleArtifactRegistryVersions#package_name}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#repository_id DataGoogleArtifactRegistryVersions#repository_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#filter DataGoogleArtifactRegistryVersions#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#id DataGoogleArtifactRegistryVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#project DataGoogleArtifactRegistryVersions#project}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.view"></a>

```go
View *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_versions#view DataGoogleArtifactRegistryVersions#view}.

---

### DataGoogleArtifactRegistryVersionsVersions <a name="DataGoogleArtifactRegistryVersionsVersions" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

&datagoogleartifactregistryversions.DataGoogleArtifactRegistryVersionsVersions {

}
```


### DataGoogleArtifactRegistryVersionsVersionsRelatedTags <a name="DataGoogleArtifactRegistryVersionsVersionsRelatedTags" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

&datagoogleartifactregistryversions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryVersionsVersionsList <a name="DataGoogleArtifactRegistryVersionsVersionsList" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

datagoogleartifactregistryversions.NewDataGoogleArtifactRegistryVersionsVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleArtifactRegistryVersionsVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.get"></a>

```go
func Get(index *f64) DataGoogleArtifactRegistryVersionsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleArtifactRegistryVersionsVersionsOutputReference <a name="DataGoogleArtifactRegistryVersionsVersionsOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

datagoogleartifactregistryversions.NewDataGoogleArtifactRegistryVersionsVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleArtifactRegistryVersionsVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.annotations">Annotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.relatedTags">RelatedTags</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList">DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions">DataGoogleArtifactRegistryVersionsVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.annotations"></a>

```go
func Annotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RelatedTags`<sup>Required</sup> <a name="RelatedTags" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.relatedTags"></a>

```go
func RelatedTags() DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList">DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleArtifactRegistryVersionsVersions
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions">DataGoogleArtifactRegistryVersionsVersions</a>

---


### DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList <a name="DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

datagoogleartifactregistryversions.NewDataGoogleArtifactRegistryVersionsVersionsRelatedTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.get"></a>

```go
func Get(index *f64) DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference <a name="DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleartifactregistryversions"

datagoogleartifactregistryversions.NewDataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags">DataGoogleArtifactRegistryVersionsVersionsRelatedTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleArtifactRegistryVersionsVersionsRelatedTags
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags">DataGoogleArtifactRegistryVersionsVersionsRelatedTags</a>

---



