# `dataGoogleStorageBucketObjectContents` Submodule <a name="`dataGoogleStorageBucketObjectContents` Submodule" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageBucketObjectContents <a name="DataGoogleStorageBucketObjectContents" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/storage_bucket_object_contents google_storage_bucket_object_contents}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragebucketobjectcontents"

datagooglestoragebucketobjectcontents.NewDataGoogleStorageBucketObjectContents(scope Construct, id *string, config DataGoogleStorageBucketObjectContentsConfig) DataGoogleStorageBucketObjectContents
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig">DataGoogleStorageBucketObjectContentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig">DataGoogleStorageBucketObjectContentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetMatchGlob">ResetMatchGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetId"></a>

```go
func ResetId()
```

##### `ResetMatchGlob` <a name="ResetMatchGlob" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetMatchGlob"></a>

```go
func ResetMatchGlob()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.resetPrefix"></a>

```go
func ResetPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageBucketObjectContents resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragebucketobjectcontents"

datagooglestoragebucketobjectcontents.DataGoogleStorageBucketObjectContents_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragebucketobjectcontents"

datagooglestoragebucketobjectcontents.DataGoogleStorageBucketObjectContents_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragebucketobjectcontents"

datagooglestoragebucketobjectcontents.DataGoogleStorageBucketObjectContents_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragebucketobjectcontents"

datagooglestoragebucketobjectcontents.DataGoogleStorageBucketObjectContents_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleStorageBucketObjectContents resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleStorageBucketObjectContents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleStorageBucketObjectContents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/storage_bucket_object_contents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageBucketObjectContents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucketObjects">BucketObjects</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList">DataGoogleStorageBucketObjectContentsBucketObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.matchGlobInput">MatchGlobInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.matchGlob">MatchGlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BucketObjects`<sup>Required</sup> <a name="BucketObjects" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucketObjects"></a>

```go
func BucketObjects() DataGoogleStorageBucketObjectContentsBucketObjectsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList">DataGoogleStorageBucketObjectContentsBucketObjectsList</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchGlobInput`<sup>Optional</sup> <a name="MatchGlobInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.matchGlobInput"></a>

```go
func MatchGlobInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MatchGlob`<sup>Required</sup> <a name="MatchGlob" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.matchGlob"></a>

```go
func MatchGlob() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContents.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageBucketObjectContentsBucketObjects <a name="DataGoogleStorageBucketObjectContentsBucketObjects" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjects.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragebucketobjectcontents"

&datagooglestoragebucketobjectcontents.DataGoogleStorageBucketObjectContentsBucketObjects {

}
```


### DataGoogleStorageBucketObjectContentsConfig <a name="DataGoogleStorageBucketObjectContentsConfig" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragebucketobjectcontents"

&datagooglestoragebucketobjectcontents.DataGoogleStorageBucketObjectContentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Id: *string,
	MatchGlob: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/storage_bucket_object_contents#bucket DataGoogleStorageBucketObjectContents#bucket}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/storage_bucket_object_contents#id DataGoogleStorageBucketObjectContents#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.matchGlob">MatchGlob</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/storage_bucket_object_contents#match_glob DataGoogleStorageBucketObjectContents#match_glob}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/storage_bucket_object_contents#prefix DataGoogleStorageBucketObjectContents#prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/storage_bucket_object_contents#bucket DataGoogleStorageBucketObjectContents#bucket}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/storage_bucket_object_contents#id DataGoogleStorageBucketObjectContents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MatchGlob`<sup>Optional</sup> <a name="MatchGlob" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.matchGlob"></a>

```go
MatchGlob *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/storage_bucket_object_contents#match_glob DataGoogleStorageBucketObjectContents#match_glob}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/storage_bucket_object_contents#prefix DataGoogleStorageBucketObjectContents#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageBucketObjectContentsBucketObjectsList <a name="DataGoogleStorageBucketObjectContentsBucketObjectsList" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragebucketobjectcontents"

datagooglestoragebucketobjectcontents.NewDataGoogleStorageBucketObjectContentsBucketObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageBucketObjectContentsBucketObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference <a name="DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragebucketobjectcontents"

datagooglestoragebucketobjectcontents.NewDataGoogleStorageBucketObjectContentsBucketObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentBase64Sha512">ContentBase64Sha512</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentHexsha512">ContentHexsha512</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.mediaLink">MediaLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjects">DataGoogleStorageBucketObjectContentsBucketObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentBase64"></a>

```go
func ContentBase64() *string
```

- *Type:* *string

---

##### `ContentBase64Sha512`<sup>Required</sup> <a name="ContentBase64Sha512" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentBase64Sha512"></a>

```go
func ContentBase64Sha512() *string
```

- *Type:* *string

---

##### `ContentHexsha512`<sup>Required</sup> <a name="ContentHexsha512" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentHexsha512"></a>

```go
func ContentHexsha512() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `MediaLink`<sup>Required</sup> <a name="MediaLink" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.mediaLink"></a>

```go
func MediaLink() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageBucketObjectContentsBucketObjects
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContents.DataGoogleStorageBucketObjectContentsBucketObjects">DataGoogleStorageBucketObjectContentsBucketObjects</a>

---



