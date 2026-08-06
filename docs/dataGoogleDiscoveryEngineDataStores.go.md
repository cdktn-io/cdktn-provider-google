# `dataGoogleDiscoveryEngineDataStores` Submodule <a name="`dataGoogleDiscoveryEngineDataStores` Submodule" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDiscoveryEngineDataStores <a name="DataGoogleDiscoveryEngineDataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores google_discovery_engine_data_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglediscoveryenginedatastores"

datagooglediscoveryenginedatastores.NewDataGoogleDiscoveryEngineDataStores(scope Construct, id *string, config DataGoogleDiscoveryEngineDataStoresConfig) DataGoogleDiscoveryEngineDataStores
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig">DataGoogleDiscoveryEngineDataStoresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig">DataGoogleDiscoveryEngineDataStoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStores resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglediscoveryenginedatastores"

datagooglediscoveryenginedatastores.DataGoogleDiscoveryEngineDataStores_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglediscoveryenginedatastores"

datagooglediscoveryenginedatastores.DataGoogleDiscoveryEngineDataStores_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglediscoveryenginedatastores"

datagooglediscoveryenginedatastores.DataGoogleDiscoveryEngineDataStores_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglediscoveryenginedatastores"

datagooglediscoveryenginedatastores.DataGoogleDiscoveryEngineDataStores_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleDiscoveryEngineDataStores to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleDiscoveryEngineDataStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleDiscoveryEngineDataStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dataStores">DataStores</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList">DataGoogleDiscoveryEngineDataStoresDataStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DataStores`<sup>Required</sup> <a name="DataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dataStores"></a>

```go
func DataStores() DataGoogleDiscoveryEngineDataStoresDataStoresList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList">DataGoogleDiscoveryEngineDataStoresDataStoresList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDiscoveryEngineDataStoresConfig <a name="DataGoogleDiscoveryEngineDataStoresConfig" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglediscoveryenginedatastores"

&datagooglediscoveryenginedatastores.DataGoogleDiscoveryEngineDataStoresConfig {
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
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores#location DataGoogleDiscoveryEngineDataStores#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/discovery_engine_data_stores#project DataGoogleDiscoveryEngineDataStores#project}

---

### DataGoogleDiscoveryEngineDataStoresDataStores <a name="DataGoogleDiscoveryEngineDataStoresDataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglediscoveryenginedatastores"

&datagooglediscoveryenginedatastores.DataGoogleDiscoveryEngineDataStoresDataStores {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDiscoveryEngineDataStoresDataStoresList <a name="DataGoogleDiscoveryEngineDataStoresDataStoresList" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglediscoveryenginedatastores"

datagooglediscoveryenginedatastores.NewDataGoogleDiscoveryEngineDataStoresDataStoresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDiscoveryEngineDataStoresDataStoresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get"></a>

```go
func Get(index *f64) DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference <a name="DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglediscoveryenginedatastores"

datagooglediscoveryenginedatastores.NewDataGoogleDiscoveryEngineDataStoresDataStoresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.contentConfig">ContentConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.dataStoreId">DataStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.defaultSchemaId">DefaultSchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.industryVertical">IndustryVertical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.solutionTypes">SolutionTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores">DataGoogleDiscoveryEngineDataStoresDataStores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentConfig`<sup>Required</sup> <a name="ContentConfig" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.contentConfig"></a>

```go
func ContentConfig() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.dataStoreId"></a>

```go
func DataStoreId() *string
```

- *Type:* *string

---

##### `DefaultSchemaId`<sup>Required</sup> <a name="DefaultSchemaId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.defaultSchemaId"></a>

```go
func DefaultSchemaId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IndustryVertical`<sup>Required</sup> <a name="IndustryVertical" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.industryVertical"></a>

```go
func IndustryVertical() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SolutionTypes`<sup>Required</sup> <a name="SolutionTypes" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.solutionTypes"></a>

```go
func SolutionTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDiscoveryEngineDataStoresDataStores
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores">DataGoogleDiscoveryEngineDataStoresDataStores</a>

---



