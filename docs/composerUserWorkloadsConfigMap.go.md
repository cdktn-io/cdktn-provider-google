# `composerUserWorkloadsConfigMap` Submodule <a name="`composerUserWorkloadsConfigMap` Submodule" id="@cdktn/provider-google.composerUserWorkloadsConfigMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComposerUserWorkloadsConfigMap <a name="ComposerUserWorkloadsConfigMap" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map google_composer_user_workloads_config_map}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/composeruserworkloadsconfigmap"

composeruserworkloadsconfigmap.NewComposerUserWorkloadsConfigMap(scope Construct, id *string, config ComposerUserWorkloadsConfigMapConfig) ComposerUserWorkloadsConfigMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig">ComposerUserWorkloadsConfigMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig">ComposerUserWorkloadsConfigMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts"></a>

```go
func PutTimeouts(value ComposerUserWorkloadsConfigMapTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

---

##### `ResetData` <a name="ResetData" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetData"></a>

```go
func ResetData()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComposerUserWorkloadsConfigMap resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/composeruserworkloadsconfigmap"

composeruserworkloadsconfigmap.ComposerUserWorkloadsConfigMap_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/composeruserworkloadsconfigmap"

composeruserworkloadsconfigmap.ComposerUserWorkloadsConfigMap_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/composeruserworkloadsconfigmap"

composeruserworkloadsconfigmap.ComposerUserWorkloadsConfigMap_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/composeruserworkloadsconfigmap"

composeruserworkloadsconfigmap.ComposerUserWorkloadsConfigMap_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComposerUserWorkloadsConfigMap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComposerUserWorkloadsConfigMap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComposerUserWorkloadsConfigMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComposerUserWorkloadsConfigMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference">ComposerUserWorkloadsConfigMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeouts"></a>

```go
func Timeouts() ComposerUserWorkloadsConfigMapTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference">ComposerUserWorkloadsConfigMapTimeoutsOutputReference</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComposerUserWorkloadsConfigMapConfig <a name="ComposerUserWorkloadsConfigMapConfig" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/composeruserworkloadsconfigmap"

&composeruserworkloadsconfigmap.ComposerUserWorkloadsConfigMapConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Environment: *string,
	Name: *string,
	Data: *map[string]*string,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.environment">Environment</a></code> | <code>*string</code> | Environment where the Kubernetes ConfigMap will be stored and used. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Kubernetes ConfigMap. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.data">Data</a></code> | <code>*map[string]*string</code> | The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#id ComposerUserWorkloadsConfigMap#id}. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#project ComposerUserWorkloadsConfigMap#project}. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.region">Region</a></code> | <code>*string</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Environment where the Kubernetes ConfigMap will be stored and used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#environment ComposerUserWorkloadsConfigMap#environment}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Kubernetes ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#name ComposerUserWorkloadsConfigMap#name}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#data ComposerUserWorkloadsConfigMap#data}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#deletion_policy ComposerUserWorkloadsConfigMap#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#id ComposerUserWorkloadsConfigMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#project ComposerUserWorkloadsConfigMap#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#region ComposerUserWorkloadsConfigMap#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.timeouts"></a>

```go
Timeouts ComposerUserWorkloadsConfigMapTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#timeouts ComposerUserWorkloadsConfigMap#timeouts}

---

### ComposerUserWorkloadsConfigMapTimeouts <a name="ComposerUserWorkloadsConfigMapTimeouts" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/composeruserworkloadsconfigmap"

&composeruserworkloadsconfigmap.ComposerUserWorkloadsConfigMapTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#create ComposerUserWorkloadsConfigMap#create}. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#delete ComposerUserWorkloadsConfigMap#delete}. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#update ComposerUserWorkloadsConfigMap#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#create ComposerUserWorkloadsConfigMap#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#delete ComposerUserWorkloadsConfigMap#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/composer_user_workloads_config_map#update ComposerUserWorkloadsConfigMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComposerUserWorkloadsConfigMapTimeoutsOutputReference <a name="ComposerUserWorkloadsConfigMapTimeoutsOutputReference" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/composeruserworkloadsconfigmap"

composeruserworkloadsconfigmap.NewComposerUserWorkloadsConfigMapTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComposerUserWorkloadsConfigMapTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



