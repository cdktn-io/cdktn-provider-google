# `dataGoogleLustreInstance` Submodule <a name="`dataGoogleLustreInstance` Submodule" id="@cdktn/provider-google.dataGoogleLustreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleLustreInstance <a name="DataGoogleLustreInstance" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/lustre_instance google_lustre_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstance(scope Construct, id *string, config DataGoogleLustreInstanceConfig) DataGoogleLustreInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig">DataGoogleLustreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig">DataGoogleLustreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleLustreInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.DataGoogleLustreInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.DataGoogleLustreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.DataGoogleLustreInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.DataGoogleLustreInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleLustreInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleLustreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleLustreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/lustre_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleLustreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.accessRulesOptions">AccessRulesOptions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList">DataGoogleLustreInstanceAccessRulesOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.dynamicTierOptions">DynamicTierOptions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList">DataGoogleLustreInstanceDynamicTierOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.filesystem">Filesystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.gkeSupportEnabled">GkeSupportEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList">DataGoogleLustreInstanceMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.placementPolicy">PlacementPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.upcomingMaintenanceSchedule">UpcomingMaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList">DataGoogleLustreInstanceUpcomingMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessRulesOptions`<sup>Required</sup> <a name="AccessRulesOptions" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.accessRulesOptions"></a>

```go
func AccessRulesOptions() DataGoogleLustreInstanceAccessRulesOptionsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList">DataGoogleLustreInstanceAccessRulesOptionsList</a>

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.capacityGib"></a>

```go
func CapacityGib() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DynamicTierOptions`<sup>Required</sup> <a name="DynamicTierOptions" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.dynamicTierOptions"></a>

```go
func DynamicTierOptions() DataGoogleLustreInstanceDynamicTierOptionsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList">DataGoogleLustreInstanceDynamicTierOptionsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.filesystem"></a>

```go
func Filesystem() *string
```

- *Type:* *string

---

##### `GkeSupportEnabled`<sup>Required</sup> <a name="GkeSupportEnabled" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.gkeSupportEnabled"></a>

```go
func GkeSupportEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() DataGoogleLustreInstanceMaintenancePolicyList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList">DataGoogleLustreInstanceMaintenancePolicyList</a>

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.perUnitStorageThroughput"></a>

```go
func PerUnitStorageThroughput() *string
```

- *Type:* *string

---

##### `PlacementPolicy`<sup>Required</sup> <a name="PlacementPolicy" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.placementPolicy"></a>

```go
func PlacementPolicy() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpcomingMaintenanceSchedule`<sup>Required</sup> <a name="UpcomingMaintenanceSchedule" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.upcomingMaintenanceSchedule"></a>

```go
func UpcomingMaintenanceSchedule() DataGoogleLustreInstanceUpcomingMaintenanceScheduleList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList">DataGoogleLustreInstanceUpcomingMaintenanceScheduleList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleLustreInstanceAccessRulesOptions <a name="DataGoogleLustreInstanceAccessRulesOptions" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceAccessRulesOptions {

}
```


### DataGoogleLustreInstanceAccessRulesOptionsAccessRules <a name="DataGoogleLustreInstanceAccessRulesOptionsAccessRules" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRules {

}
```


### DataGoogleLustreInstanceConfig <a name="DataGoogleLustreInstanceConfig" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	Id: *string,
	Project: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | The name of the Managed Lustre instance. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/lustre_instance#id DataGoogleLustreInstance#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/lustre_instance#project DataGoogleLustreInstance#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone of Lustre instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

The name of the Managed Lustre instance.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/lustre_instance#instance_id DataGoogleLustreInstance#instance_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/lustre_instance#id DataGoogleLustreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/lustre_instance#project DataGoogleLustreInstance#project}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone of Lustre instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/lustre_instance#zone DataGoogleLustreInstance#zone}

---

### DataGoogleLustreInstanceDynamicTierOptions <a name="DataGoogleLustreInstanceDynamicTierOptions" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceDynamicTierOptions {

}
```


### DataGoogleLustreInstanceMaintenancePolicy <a name="DataGoogleLustreInstanceMaintenancePolicy" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceMaintenancePolicy {

}
```


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow {

}
```


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate {

}
```


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate {

}
```


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime {

}
```


### DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows <a name="DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows {

}
```


### DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime <a name="DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime {

}
```


### DataGoogleLustreInstanceUpcomingMaintenanceSchedule <a name="DataGoogleLustreInstanceUpcomingMaintenanceSchedule" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

&datagooglelustreinstance.DataGoogleLustreInstanceUpcomingMaintenanceSchedule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList <a name="DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceAccessRulesOptionsAccessRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference <a name="DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRanges">IpAddressRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashMode">SquashMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRules">DataGoogleLustreInstanceAccessRulesOptionsAccessRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressRanges`<sup>Required</sup> <a name="IpAddressRanges" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRanges"></a>

```go
func IpAddressRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SquashMode`<sup>Required</sup> <a name="SquashMode" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashMode"></a>

```go
func SquashMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceAccessRulesOptionsAccessRules
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRules">DataGoogleLustreInstanceAccessRulesOptionsAccessRules</a>

---


### DataGoogleLustreInstanceAccessRulesOptionsList <a name="DataGoogleLustreInstanceAccessRulesOptionsList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceAccessRulesOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceAccessRulesOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceAccessRulesOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceAccessRulesOptionsOutputReference <a name="DataGoogleLustreInstanceAccessRulesOptionsOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceAccessRulesOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceAccessRulesOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.accessRules">AccessRules</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList">DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGid">DefaultSquashGid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashMode">DefaultSquashMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUid">DefaultSquashUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptions">DataGoogleLustreInstanceAccessRulesOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRules`<sup>Required</sup> <a name="AccessRules" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.accessRules"></a>

```go
func AccessRules() DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList">DataGoogleLustreInstanceAccessRulesOptionsAccessRulesList</a>

---

##### `DefaultSquashGid`<sup>Required</sup> <a name="DefaultSquashGid" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGid"></a>

```go
func DefaultSquashGid() *f64
```

- *Type:* *f64

---

##### `DefaultSquashMode`<sup>Required</sup> <a name="DefaultSquashMode" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashMode"></a>

```go
func DefaultSquashMode() *string
```

- *Type:* *string

---

##### `DefaultSquashUid`<sup>Required</sup> <a name="DefaultSquashUid" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUid"></a>

```go
func DefaultSquashUid() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceAccessRulesOptions
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceAccessRulesOptions">DataGoogleLustreInstanceAccessRulesOptions</a>

---


### DataGoogleLustreInstanceDynamicTierOptionsList <a name="DataGoogleLustreInstanceDynamicTierOptionsList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceDynamicTierOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceDynamicTierOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceDynamicTierOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceDynamicTierOptionsOutputReference <a name="DataGoogleLustreInstanceDynamicTierOptionsOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceDynamicTierOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceDynamicTierOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptions">DataGoogleLustreInstanceDynamicTierOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceDynamicTierOptions
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceDynamicTierOptions">DataGoogleLustreInstanceDynamicTierOptions</a>

---


### DataGoogleLustreInstanceMaintenancePolicyList <a name="DataGoogleLustreInstanceMaintenancePolicyList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceMaintenancePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceMaintenancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.time">Time</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDate"></a>

```go
func EndDate() DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDate"></a>

```go
func StartDate() DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList</a>

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.time"></a>

```go
func Time() DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference <a name="DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---


### DataGoogleLustreInstanceMaintenancePolicyOutputReference <a name="DataGoogleLustreInstanceMaintenancePolicyOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindow">MaintenanceExclusionWindow</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindows">WeeklyMaintenanceWindows</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList">DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicy">DataGoogleLustreInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaintenanceExclusionWindow`<sup>Required</sup> <a name="MaintenanceExclusionWindow" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindow"></a>

```go
func MaintenanceExclusionWindow() DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList">DataGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowList</a>

---

##### `WeeklyMaintenanceWindows`<sup>Required</sup> <a name="WeeklyMaintenanceWindows" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindows"></a>

```go
func WeeklyMaintenanceWindows() DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList">DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicy">DataGoogleLustreInstanceMaintenancePolicy</a>

---


### DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList <a name="DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference <a name="DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList">DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTime"></a>

```go
func StartTime() DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList">DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---


### DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList <a name="DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference <a name="DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">DataGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---


### DataGoogleLustreInstanceUpcomingMaintenanceScheduleList <a name="DataGoogleLustreInstanceUpcomingMaintenanceScheduleList" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceUpcomingMaintenanceScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLustreInstanceUpcomingMaintenanceScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.get"></a>

```go
func Get(index *f64) DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference <a name="DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglelustreinstance"

datagooglelustreinstance.NewDataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceSchedule">DataGoogleLustreInstanceUpcomingMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLustreInstanceUpcomingMaintenanceSchedule
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleLustreInstance.DataGoogleLustreInstanceUpcomingMaintenanceSchedule">DataGoogleLustreInstanceUpcomingMaintenanceSchedule</a>

---



