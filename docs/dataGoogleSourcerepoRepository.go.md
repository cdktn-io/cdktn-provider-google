# `dataGoogleSourcerepoRepository` Submodule <a name="`dataGoogleSourcerepoRepository` Submodule" id="@cdktn/provider-google.dataGoogleSourcerepoRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSourcerepoRepository <a name="DataGoogleSourcerepoRepository" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sourcerepo_repository google_sourcerepo_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglesourcereporepository"

datagooglesourcereporepository.NewDataGoogleSourcerepoRepository(scope Construct, id *string, config DataGoogleSourcerepoRepositoryConfig) DataGoogleSourcerepoRepository
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig">DataGoogleSourcerepoRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig">DataGoogleSourcerepoRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleSourcerepoRepository resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglesourcereporepository"

datagooglesourcereporepository.DataGoogleSourcerepoRepository_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglesourcereporepository"

datagooglesourcereporepository.DataGoogleSourcerepoRepository_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglesourcereporepository"

datagooglesourcereporepository.DataGoogleSourcerepoRepository_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglesourcereporepository"

datagooglesourcereporepository.DataGoogleSourcerepoRepository_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleSourcerepoRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleSourcerepoRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleSourcerepoRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sourcerepo_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleSourcerepoRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.createIgnoreAlreadyExists">CreateIgnoreAlreadyExists</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.pubsubConfigs">PubsubConfigs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList">DataGoogleSourcerepoRepositoryPubsubConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateIgnoreAlreadyExists`<sup>Required</sup> <a name="CreateIgnoreAlreadyExists" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.createIgnoreAlreadyExists"></a>

```go
func CreateIgnoreAlreadyExists() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PubsubConfigs`<sup>Required</sup> <a name="PubsubConfigs" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.pubsubConfigs"></a>

```go
func PubsubConfigs() DataGoogleSourcerepoRepositoryPubsubConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList">DataGoogleSourcerepoRepositoryPubsubConfigsList</a>

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepository.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSourcerepoRepositoryConfig <a name="DataGoogleSourcerepoRepositoryConfig" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglesourcereporepository"

&datagooglesourcereporepository.DataGoogleSourcerepoRepositoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.name">Name</a></code> | <code>*string</code> | Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sourcerepo_repository#id DataGoogleSourcerepoRepository#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sourcerepo_repository#project DataGoogleSourcerepoRepository#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sourcerepo_repository#name DataGoogleSourcerepoRepository#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sourcerepo_repository#id DataGoogleSourcerepoRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/sourcerepo_repository#project DataGoogleSourcerepoRepository#project}.

---

### DataGoogleSourcerepoRepositoryPubsubConfigs <a name="DataGoogleSourcerepoRepositoryPubsubConfigs" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglesourcereporepository"

&datagooglesourcereporepository.DataGoogleSourcerepoRepositoryPubsubConfigs {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSourcerepoRepositoryPubsubConfigsList <a name="DataGoogleSourcerepoRepositoryPubsubConfigsList" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglesourcereporepository"

datagooglesourcereporepository.NewDataGoogleSourcerepoRepositoryPubsubConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSourcerepoRepositoryPubsubConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.get"></a>

```go
func Get(index *f64) DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference <a name="DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/datagooglesourcereporepository"

datagooglesourcereporepository.NewDataGoogleSourcerepoRepositoryPubsubConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigs">DataGoogleSourcerepoRepositoryPubsubConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat"></a>

```go
func MessageFormat() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSourcerepoRepositoryPubsubConfigs
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSourcerepoRepository.DataGoogleSourcerepoRepositoryPubsubConfigs">DataGoogleSourcerepoRepositoryPubsubConfigs</a>

---



