# `dataGoogleContainerEngineVersions` Submodule <a name="`dataGoogleContainerEngineVersions` Submodule" id="@cdktn/provider-google.dataGoogleContainerEngineVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleContainerEngineVersions <a name="DataGoogleContainerEngineVersions" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/container_engine_versions google_container_engine_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglecontainerengineversions"

datagooglecontainerengineversions.NewDataGoogleContainerEngineVersions(scope Construct, id *string, config DataGoogleContainerEngineVersionsConfig) DataGoogleContainerEngineVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig">DataGoogleContainerEngineVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig">DataGoogleContainerEngineVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetVersionPrefix">ResetVersionPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetProject"></a>

```go
func ResetProject()
```

##### `ResetVersionPrefix` <a name="ResetVersionPrefix" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetVersionPrefix"></a>

```go
func ResetVersionPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleContainerEngineVersions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglecontainerengineversions"

datagooglecontainerengineversions.DataGoogleContainerEngineVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglecontainerengineversions"

datagooglecontainerengineversions.DataGoogleContainerEngineVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglecontainerengineversions"

datagooglecontainerengineversions.DataGoogleContainerEngineVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglecontainerengineversions"

datagooglecontainerengineversions.DataGoogleContainerEngineVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleContainerEngineVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleContainerEngineVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleContainerEngineVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/container_engine_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleContainerEngineVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.defaultClusterVersion">DefaultClusterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestMasterVersion">LatestMasterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestNodeVersion">LatestNodeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelDefaultVersion">ReleaseChannelDefaultVersion</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelLatestVersion">ReleaseChannelLatestVersion</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelUpgradeTargetVersion">ReleaseChannelUpgradeTargetVersion</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validMasterVersions">ValidMasterVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validNodeVersions">ValidNodeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefixInput">VersionPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefix">VersionPrefix</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DefaultClusterVersion`<sup>Required</sup> <a name="DefaultClusterVersion" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.defaultClusterVersion"></a>

```go
func DefaultClusterVersion() *string
```

- *Type:* *string

---

##### `LatestMasterVersion`<sup>Required</sup> <a name="LatestMasterVersion" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestMasterVersion"></a>

```go
func LatestMasterVersion() *string
```

- *Type:* *string

---

##### `LatestNodeVersion`<sup>Required</sup> <a name="LatestNodeVersion" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestNodeVersion"></a>

```go
func LatestNodeVersion() *string
```

- *Type:* *string

---

##### `ReleaseChannelDefaultVersion`<sup>Required</sup> <a name="ReleaseChannelDefaultVersion" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelDefaultVersion"></a>

```go
func ReleaseChannelDefaultVersion() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ReleaseChannelLatestVersion`<sup>Required</sup> <a name="ReleaseChannelLatestVersion" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelLatestVersion"></a>

```go
func ReleaseChannelLatestVersion() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ReleaseChannelUpgradeTargetVersion`<sup>Required</sup> <a name="ReleaseChannelUpgradeTargetVersion" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelUpgradeTargetVersion"></a>

```go
func ReleaseChannelUpgradeTargetVersion() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ValidMasterVersions`<sup>Required</sup> <a name="ValidMasterVersions" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validMasterVersions"></a>

```go
func ValidMasterVersions() *[]*string
```

- *Type:* *[]*string

---

##### `ValidNodeVersions`<sup>Required</sup> <a name="ValidNodeVersions" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validNodeVersions"></a>

```go
func ValidNodeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `VersionPrefixInput`<sup>Optional</sup> <a name="VersionPrefixInput" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefixInput"></a>

```go
func VersionPrefixInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `VersionPrefix`<sup>Required</sup> <a name="VersionPrefix" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefix"></a>

```go
func VersionPrefix() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleContainerEngineVersionsConfig <a name="DataGoogleContainerEngineVersionsConfig" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglecontainerengineversions"

&datagooglecontainerengineversions.DataGoogleContainerEngineVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Location: *string,
	Project: *string,
	VersionPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/container_engine_versions#id DataGoogleContainerEngineVersions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/container_engine_versions#location DataGoogleContainerEngineVersions#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/container_engine_versions#project DataGoogleContainerEngineVersions#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.versionPrefix">VersionPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/container_engine_versions#id DataGoogleContainerEngineVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/container_engine_versions#location DataGoogleContainerEngineVersions#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/container_engine_versions#project DataGoogleContainerEngineVersions#project}.

---

##### `VersionPrefix`<sup>Optional</sup> <a name="VersionPrefix" id="@cdktn/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.versionPrefix"></a>

```go
VersionPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}.

---



