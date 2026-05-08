# `cesExample` Submodule <a name="`cesExample` Submodule" id="@cdktn/provider-google.cesExample"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesExample <a name="CesExample" id="@cdktn/provider-google.cesExample.CesExample"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example google_ces_example}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExample.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExample(scope Construct, id *string, config CesExampleConfig) CesExample
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig">CesExampleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleConfig">CesExampleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetEntryAgent">ResetEntryAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExample.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cesExample.CesExample.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesExample.CesExample.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cesExample.CesExample.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesExample.CesExample.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExample.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cesExample.CesExample.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesExample.CesExample.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cesExample.CesExample.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cesExample.CesExample.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cesExample.CesExample.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cesExample.CesExample.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cesExample.CesExample.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesExample.CesExample.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExample.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cesExample.CesExample.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cesExample.CesExample.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExample.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cesExample.CesExample.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cesExample.CesExample.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesExample.CesExample.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesExample.CesExample.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cesExample.CesExample.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMessages` <a name="PutMessages" id="@cdktn/provider-google.cesExample.CesExample.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExample.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cesExample.CesExample.putTimeouts"></a>

```go
func PutTimeouts(value CesExampleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExample.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesExample.CesExample.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEntryAgent` <a name="ResetEntryAgent" id="@cdktn/provider-google.cesExample.CesExample.resetEntryAgent"></a>

```go
func ResetEntryAgent()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesExample.CesExample.resetId"></a>

```go
func ResetId()
```

##### `ResetMessages` <a name="ResetMessages" id="@cdktn/provider-google.cesExample.CesExample.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.cesExample.CesExample.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cesExample.CesExample.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CesExample resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cesExample.CesExample.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.CesExample_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesExample.CesExample.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cesExample.CesExample.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.CesExample_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesExample.CesExample.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cesExample.CesExample.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.CesExample_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesExample.CesExample.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.CesExample_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CesExample resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CesExample to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CesExample that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CesExample to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.invalid">Invalid</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.messages">Messages</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList">CesExampleMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference">CesExampleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.appInput">AppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.entryAgentInput">EntryAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.exampleIdInput">ExampleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.app">App</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.entryAgent">EntryAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.exampleId">ExampleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cesExample.CesExample.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cesExample.CesExample.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExample.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cesExample.CesExample.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cesExample.CesExample.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cesExample.CesExample.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cesExample.CesExample.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesExample.CesExample.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesExample.CesExample.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesExample.CesExample.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesExample.CesExample.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesExample.CesExample.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesExample.CesExample.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesExample.CesExample.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.cesExample.CesExample.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.cesExample.CesExample.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Invalid`<sup>Required</sup> <a name="Invalid" id="@cdktn/provider-google.cesExample.CesExample.property.invalid"></a>

```go
func Invalid() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktn/provider-google.cesExample.CesExample.property.messages"></a>

```go
func Messages() CesExampleMessagesList
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList">CesExampleMessagesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesExample.CesExample.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cesExample.CesExample.property.timeouts"></a>

```go
func Timeouts() CesExampleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference">CesExampleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.cesExample.CesExample.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google.cesExample.CesExample.property.appInput"></a>

```go
func AppInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesExample.CesExample.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.cesExample.CesExample.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntryAgentInput`<sup>Optional</sup> <a name="EntryAgentInput" id="@cdktn/provider-google.cesExample.CesExample.property.entryAgentInput"></a>

```go
func EntryAgentInput() *string
```

- *Type:* *string

---

##### `ExampleIdInput`<sup>Optional</sup> <a name="ExampleIdInput" id="@cdktn/provider-google.cesExample.CesExample.property.exampleIdInput"></a>

```go
func ExampleIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesExample.CesExample.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.cesExample.CesExample.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktn/provider-google.cesExample.CesExample.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.cesExample.CesExample.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cesExample.CesExample.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesExample.CesExample.property.app"></a>

```go
func App() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesExample.CesExample.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesExample.CesExample.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntryAgent`<sup>Required</sup> <a name="EntryAgent" id="@cdktn/provider-google.cesExample.CesExample.property.entryAgent"></a>

```go
func EntryAgent() *string
```

- *Type:* *string

---

##### `ExampleId`<sup>Required</sup> <a name="ExampleId" id="@cdktn/provider-google.cesExample.CesExample.property.exampleId"></a>

```go
func ExampleId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExample.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesExample.CesExample.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.cesExample.CesExample.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cesExample.CesExample.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CesExampleConfig <a name="CesExampleConfig" id="@cdktn/provider-google.cesExample.CesExampleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

&cesexample.CesExampleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	App: *string,
	DisplayName: *string,
	ExampleId: *string,
	Location: *string,
	Description: *string,
	EntryAgent: *string,
	Id: *string,
	Messages: interface{},
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesExample.CesExampleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.app">App</a></code> | <code>*string</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.exampleId">ExampleId</a></code> | <code>*string</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.entryAgent">EntryAgent</a></code> | <code>*string</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#id CesExample#id}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.messages">Messages</a></code> | <code>interface{}</code> | messages block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#project CesExample#project}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.app"></a>

```go
App *string
```

- *Type:* *string

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#app CesExample#app}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#display_name CesExample#display_name}

---

##### `ExampleId`<sup>Required</sup> <a name="ExampleId" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.exampleId"></a>

```go
ExampleId *string
```

- *Type:* *string

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#example_id CesExample#example_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#location CesExample#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#description CesExample#description}

---

##### `EntryAgent`<sup>Optional</sup> <a name="EntryAgent" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.entryAgent"></a>

```go
EntryAgent *string
```

- *Type:* *string

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#entry_agent CesExample#entry_agent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#id CesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#messages CesExample#messages}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#project CesExample#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.timeouts"></a>

```go
Timeouts CesExampleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#timeouts CesExample#timeouts}

---

### CesExampleMessages <a name="CesExampleMessages" id="@cdktn/provider-google.cesExample.CesExampleMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

&cesexample.CesExampleMessages {
	Chunks: interface{},
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessages.property.chunks">Chunks</a></code> | <code>interface{}</code> | chunks block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessages.property.role">Role</a></code> | <code>*string</code> | The role within the conversation, e.g., user, agent. |

---

##### `Chunks`<sup>Optional</sup> <a name="Chunks" id="@cdktn/provider-google.cesExample.CesExampleMessages.property.chunks"></a>

```go
Chunks interface{}
```

- *Type:* interface{}

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#chunks CesExample#chunks}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-google.cesExample.CesExampleMessages.property.role"></a>

```go
Role *string
```

- *Type:* *string

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#role CesExample#role}

---

### CesExampleMessagesChunks <a name="CesExampleMessagesChunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

&cesexample.CesExampleMessagesChunks {
	AgentTransfer: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesExample.CesExampleMessagesChunksAgentTransfer,
	Image: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesExample.CesExampleMessagesChunksImage,
	Text: *string,
	ToolCall: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesExample.CesExampleMessagesChunksToolCall,
	ToolResponse: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesExample.CesExampleMessagesChunksToolResponse,
	UpdatedVariables: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.text">Text</a></code> | <code>*string</code> | Text data. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.updatedVariables">UpdatedVariables</a></code> | <code>*string</code> | A struct represents variables that were updated in the conversation, keyed by variable names. |

---

##### `AgentTransfer`<sup>Optional</sup> <a name="AgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.agentTransfer"></a>

```go
AgentTransfer CesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#agent_transfer CesExample#agent_transfer}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.image"></a>

```go
Image CesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#image CesExample#image}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.text"></a>

```go
Text *string
```

- *Type:* *string

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#text CesExample#text}

---

##### `ToolCall`<sup>Optional</sup> <a name="ToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolCall"></a>

```go
ToolCall CesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#tool_call CesExample#tool_call}

---

##### `ToolResponse`<sup>Optional</sup> <a name="ToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolResponse"></a>

```go
ToolResponse CesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#tool_response CesExample#tool_response}

---

##### `UpdatedVariables`<sup>Optional</sup> <a name="UpdatedVariables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.updatedVariables"></a>

```go
UpdatedVariables *string
```

- *Type:* *string

A struct represents variables that were updated in the conversation, keyed by variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#updated_variables CesExample#updated_variables}

---

### CesExampleMessagesChunksAgentTransfer <a name="CesExampleMessagesChunksAgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

&cesexample.CesExampleMessagesChunksAgentTransfer {
	TargetAgent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.property.targetAgent">TargetAgent</a></code> | <code>*string</code> | The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.property.targetAgent"></a>

```go
TargetAgent *string
```

- *Type:* *string

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#target_agent CesExample#target_agent}

---

### CesExampleMessagesChunksImage <a name="CesExampleMessagesChunksImage" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

&cesexample.CesExampleMessagesChunksImage {
	Data: *string,
	MimeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.data">Data</a></code> | <code>*string</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.mimeType">MimeType</a></code> | <code>*string</code> | The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.data"></a>

```go
Data *string
```

- *Type:* *string

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#data CesExample#data}

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#mime_type CesExample#mime_type}

---

### CesExampleMessagesChunksToolCall <a name="CesExampleMessagesChunksToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

&cesexample.CesExampleMessagesChunksToolCall {
	Args: *string,
	Id: *string,
	Tool: *string,
	ToolsetTool: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesExample.CesExampleMessagesChunksToolCallToolsetTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.args">Args</a></code> | <code>*string</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.tool">Tool</a></code> | <code>*string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.args"></a>

```go
Args *string
```

- *Type:* *string

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#args CesExample#args}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#id CesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#tool CesExample#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.toolsetTool"></a>

```go
ToolsetTool CesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}

---

### CesExampleMessagesChunksToolCallToolsetTool <a name="CesExampleMessagesChunksToolCallToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

&cesexample.CesExampleMessagesChunksToolCallToolsetTool {
	Toolset: *string,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolset">Toolset</a></code> | <code>*string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolId">ToolId</a></code> | <code>*string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#toolset CesExample#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#tool_id CesExample#tool_id}

---

### CesExampleMessagesChunksToolResponse <a name="CesExampleMessagesChunksToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

&cesexample.CesExampleMessagesChunksToolResponse {
	Response: *string,
	Id: *string,
	Tool: *string,
	ToolsetTool: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesExample.CesExampleMessagesChunksToolResponseToolsetTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.response">Response</a></code> | <code>*string</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.id">Id</a></code> | <code>*string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.tool">Tool</a></code> | <code>*string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.response"></a>

```go
Response *string
```

- *Type:* *string

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#response CesExample#response}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.id"></a>

```go
Id *string
```

- *Type:* *string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#id CesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#tool CesExample#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.toolsetTool"></a>

```go
ToolsetTool CesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}

---

### CesExampleMessagesChunksToolResponseToolsetTool <a name="CesExampleMessagesChunksToolResponseToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

&cesexample.CesExampleMessagesChunksToolResponseToolsetTool {
	Toolset: *string,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolset">Toolset</a></code> | <code>*string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolId">ToolId</a></code> | <code>*string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#toolset CesExample#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#tool_id CesExample#tool_id}

---

### CesExampleTimeouts <a name="CesExampleTimeouts" id="@cdktn/provider-google.cesExample.CesExampleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

&cesexample.CesExampleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#create CesExample#create}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#delete CesExample#delete}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#update CesExample#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#create CesExample#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#delete CesExample#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_example#update CesExample#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesExampleMessagesChunksAgentTransferOutputReference <a name="CesExampleMessagesChunksAgentTransferOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleMessagesChunksAgentTransferOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesExampleMessagesChunksAgentTransferOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput">TargetAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent">TargetAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `TargetAgentInput`<sup>Optional</sup> <a name="TargetAgentInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```go
func TargetAgentInput() *string
```

- *Type:* *string

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent"></a>

```go
func TargetAgent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.internalValue"></a>

```go
func InternalValue() CesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---


### CesExampleMessagesChunksImageOutputReference <a name="CesExampleMessagesChunksImageOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleMessagesChunksImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesExampleMessagesChunksImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.internalValue"></a>

```go
func InternalValue() CesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---


### CesExampleMessagesChunksList <a name="CesExampleMessagesChunksList" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleMessagesChunksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesExampleMessagesChunksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get"></a>

```go
func Get(index *f64) CesExampleMessagesChunksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesExampleMessagesChunksOutputReference <a name="CesExampleMessagesChunksOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleMessagesChunksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesExampleMessagesChunksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer">PutAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall">PutToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse">PutToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetAgentTransfer">ResetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolCall">ResetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolResponse">ResetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetUpdatedVariables">ResetUpdatedVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentTransfer` <a name="PutAgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer"></a>

```go
func PutAgentTransfer(value CesExampleMessagesChunksAgentTransfer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---

##### `PutImage` <a name="PutImage" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage"></a>

```go
func PutImage(value CesExampleMessagesChunksImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---

##### `PutToolCall` <a name="PutToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall"></a>

```go
func PutToolCall(value CesExampleMessagesChunksToolCall)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---

##### `PutToolResponse` <a name="PutToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse"></a>

```go
func PutToolResponse(value CesExampleMessagesChunksToolResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---

##### `ResetAgentTransfer` <a name="ResetAgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetAgentTransfer"></a>

```go
func ResetAgentTransfer()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetToolCall` <a name="ResetToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolCall"></a>

```go
func ResetToolCall()
```

##### `ResetToolResponse` <a name="ResetToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolResponse"></a>

```go
func ResetToolResponse()
```

##### `ResetUpdatedVariables` <a name="ResetUpdatedVariables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetUpdatedVariables"></a>

```go
func ResetUpdatedVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference">CesExampleMessagesChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference">CesExampleMessagesChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference">CesExampleMessagesChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference">CesExampleMessagesChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransferInput">AgentTransferInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCallInput">ToolCallInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponseInput">ToolResponseInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariablesInput">UpdatedVariablesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariables">UpdatedVariables</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentTransfer`<sup>Required</sup> <a name="AgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransfer"></a>

```go
func AgentTransfer() CesExampleMessagesChunksAgentTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference">CesExampleMessagesChunksAgentTransferOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.image"></a>

```go
func Image() CesExampleMessagesChunksImageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference">CesExampleMessagesChunksImageOutputReference</a>

---

##### `ToolCall`<sup>Required</sup> <a name="ToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCall"></a>

```go
func ToolCall() CesExampleMessagesChunksToolCallOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference">CesExampleMessagesChunksToolCallOutputReference</a>

---

##### `ToolResponse`<sup>Required</sup> <a name="ToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponse"></a>

```go
func ToolResponse() CesExampleMessagesChunksToolResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference">CesExampleMessagesChunksToolResponseOutputReference</a>

---

##### `AgentTransferInput`<sup>Optional</sup> <a name="AgentTransferInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransferInput"></a>

```go
func AgentTransferInput() CesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.imageInput"></a>

```go
func ImageInput() CesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `ToolCallInput`<sup>Optional</sup> <a name="ToolCallInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCallInput"></a>

```go
func ToolCallInput() CesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---

##### `ToolResponseInput`<sup>Optional</sup> <a name="ToolResponseInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponseInput"></a>

```go
func ToolResponseInput() CesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---

##### `UpdatedVariablesInput`<sup>Optional</sup> <a name="UpdatedVariablesInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariablesInput"></a>

```go
func UpdatedVariablesInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `UpdatedVariables`<sup>Required</sup> <a name="UpdatedVariables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariables"></a>

```go
func UpdatedVariables() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesExampleMessagesChunksToolCallOutputReference <a name="CesExampleMessagesChunksToolCallOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleMessagesChunksToolCallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesExampleMessagesChunksToolCallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool"></a>

```go
func PutToolsetTool(value CesExampleMessagesChunksToolCallToolsetTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetTool"></a>

```go
func ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetToolsetTool"></a>

```go
func ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference">CesExampleMessagesChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.argsInput">ArgsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.args">Args</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetTool"></a>

```go
func ToolsetTool() CesExampleMessagesChunksToolCallToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference">CesExampleMessagesChunksToolCallToolsetToolOutputReference</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.argsInput"></a>

```go
func ArgsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput"></a>

```go
func ToolsetToolInput() CesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.args"></a>

```go
func Args() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.internalValue"></a>

```go
func InternalValue() CesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---


### CesExampleMessagesChunksToolCallToolsetToolOutputReference <a name="CesExampleMessagesChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleMessagesChunksToolCallToolsetToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesExampleMessagesChunksToolCallToolsetToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```go
func ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```go
func InternalValue() CesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---


### CesExampleMessagesChunksToolResponseOutputReference <a name="CesExampleMessagesChunksToolResponseOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleMessagesChunksToolResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesExampleMessagesChunksToolResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool"></a>

```go
func PutToolsetTool(value CesExampleMessagesChunksToolResponseToolsetTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetTool"></a>

```go
func ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool"></a>

```go
func ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference">CesExampleMessagesChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool"></a>

```go
func ToolsetTool() CesExampleMessagesChunksToolResponseToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference">CesExampleMessagesChunksToolResponseToolsetToolOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```go
func ToolsetToolInput() CesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() CesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---


### CesExampleMessagesChunksToolResponseToolsetToolOutputReference <a name="CesExampleMessagesChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleMessagesChunksToolResponseToolsetToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesExampleMessagesChunksToolResponseToolsetToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```go
func ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```go
func InternalValue() CesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---


### CesExampleMessagesList <a name="CesExampleMessagesList" id="@cdktn/provider-google.cesExample.CesExampleMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesExampleMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.get"></a>

```go
func Get(index *f64) CesExampleMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesExampleMessagesOutputReference <a name="CesExampleMessagesOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesExampleMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks">PutChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetChunks">ResetChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChunks` <a name="PutChunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks"></a>

```go
func PutChunks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetChunks` <a name="ResetChunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetChunks"></a>

```go
func ResetChunks()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetRole"></a>

```go
func ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunks">Chunks</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList">CesExampleMessagesChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunksInput">ChunksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Chunks`<sup>Required</sup> <a name="Chunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunks"></a>

```go
func Chunks() CesExampleMessagesChunksList
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList">CesExampleMessagesChunksList</a>

---

##### `ChunksInput`<sup>Optional</sup> <a name="ChunksInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunksInput"></a>

```go
func ChunksInput() interface{}
```

- *Type:* interface{}

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesExampleTimeoutsOutputReference <a name="CesExampleTimeoutsOutputReference" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesexample"

cesexample.NewCesExampleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesExampleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



