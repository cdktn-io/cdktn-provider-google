# `developerConnectGitRepositoryLink` Submodule <a name="`developerConnectGitRepositoryLink` Submodule" id="@cdktn/provider-google.developerConnectGitRepositoryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectGitRepositoryLink <a name="DeveloperConnectGitRepositoryLink" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link google_developer_connect_git_repository_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/developerconnectgitrepositorylink"

developerconnectgitrepositorylink.NewDeveloperConnectGitRepositoryLink(scope Construct, id *string, config DeveloperConnectGitRepositoryLinkConfig) DeveloperConnectGitRepositoryLink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig">DeveloperConnectGitRepositoryLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig">DeveloperConnectGitRepositoryLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts"></a>

```go
func PutTimeouts(value DeveloperConnectGitRepositoryLinkTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DeveloperConnectGitRepositoryLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/developerconnectgitrepositorylink"

developerconnectgitrepositorylink.DeveloperConnectGitRepositoryLink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/developerconnectgitrepositorylink"

developerconnectgitrepositorylink.DeveloperConnectGitRepositoryLink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/developerconnectgitrepositorylink"

developerconnectgitrepositorylink.DeveloperConnectGitRepositoryLink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/developerconnectgitrepositorylink"

developerconnectgitrepositorylink.DeveloperConnectGitRepositoryLink_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DeveloperConnectGitRepositoryLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DeveloperConnectGitRepositoryLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DeveloperConnectGitRepositoryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DeveloperConnectGitRepositoryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.reconciling">Reconciling</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference">DeveloperConnectGitRepositoryLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUriInput">CloneUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkIdInput">GitRepositoryLinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnectionInput">ParentConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUri">CloneUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkId">GitRepositoryLinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnection">ParentConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeouts"></a>

```go
func Timeouts() DeveloperConnectGitRepositoryLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference">DeveloperConnectGitRepositoryLinkTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CloneUriInput`<sup>Optional</sup> <a name="CloneUriInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUriInput"></a>

```go
func CloneUriInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `GitRepositoryLinkIdInput`<sup>Optional</sup> <a name="GitRepositoryLinkIdInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkIdInput"></a>

```go
func GitRepositoryLinkIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParentConnectionInput`<sup>Optional</sup> <a name="ParentConnectionInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnectionInput"></a>

```go
func ParentConnectionInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CloneUri`<sup>Required</sup> <a name="CloneUri" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUri"></a>

```go
func CloneUri() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `GitRepositoryLinkId`<sup>Required</sup> <a name="GitRepositoryLinkId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkId"></a>

```go
func GitRepositoryLinkId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ParentConnection`<sup>Required</sup> <a name="ParentConnection" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnection"></a>

```go
func ParentConnection() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectGitRepositoryLinkConfig <a name="DeveloperConnectGitRepositoryLinkConfig" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/developerconnectgitrepositorylink"

&developerconnectgitrepositorylink.DeveloperConnectGitRepositoryLinkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CloneUri: *string,
	GitRepositoryLinkId: *string,
	Location: *string,
	ParentConnection: *string,
	Annotations: *map[string]*string,
	DeletionPolicy: *string,
	Etag: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.cloneUri">CloneUri</a></code> | <code>*string</code> | Required. Git Clone URI. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.gitRepositoryLinkId">GitRepositoryLinkId</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.parentConnection">ParentConnection</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.etag">Etag</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#id DeveloperConnectGitRepositoryLink#id}. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#project DeveloperConnectGitRepositoryLink#project}. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloneUri`<sup>Required</sup> <a name="CloneUri" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.cloneUri"></a>

```go
CloneUri *string
```

- *Type:* *string

Required. Git Clone URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#clone_uri DeveloperConnectGitRepositoryLink#clone_uri}

---

##### `GitRepositoryLinkId`<sup>Required</sup> <a name="GitRepositoryLinkId" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.gitRepositoryLinkId"></a>

```go
GitRepositoryLinkId *string
```

- *Type:* *string

Required.

The ID to use for the repository, which will become the final component of
the repository's resource name. This ID should be unique in the connection.
Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#git_repository_link_id DeveloperConnectGitRepositoryLink#git_repository_link_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#location DeveloperConnectGitRepositoryLink#location}

---

##### `ParentConnection`<sup>Required</sup> <a name="ParentConnection" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.parentConnection"></a>

```go
ParentConnection *string
```

- *Type:* *string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#parent_connection DeveloperConnectGitRepositoryLink#parent_connection}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#annotations DeveloperConnectGitRepositoryLink#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#deletion_policy DeveloperConnectGitRepositoryLink#deletion_policy}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#etag DeveloperConnectGitRepositoryLink#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#id DeveloperConnectGitRepositoryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#labels DeveloperConnectGitRepositoryLink#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#project DeveloperConnectGitRepositoryLink#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.timeouts"></a>

```go
Timeouts DeveloperConnectGitRepositoryLinkTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#timeouts DeveloperConnectGitRepositoryLink#timeouts}

---

### DeveloperConnectGitRepositoryLinkTimeouts <a name="DeveloperConnectGitRepositoryLinkTimeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/developerconnectgitrepositorylink"

&developerconnectgitrepositorylink.DeveloperConnectGitRepositoryLinkTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#create DeveloperConnectGitRepositoryLink#create}. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#delete DeveloperConnectGitRepositoryLink#delete}. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#update DeveloperConnectGitRepositoryLink#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#create DeveloperConnectGitRepositoryLink#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#delete DeveloperConnectGitRepositoryLink#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/developer_connect_git_repository_link#update DeveloperConnectGitRepositoryLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectGitRepositoryLinkTimeoutsOutputReference <a name="DeveloperConnectGitRepositoryLinkTimeoutsOutputReference" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/developerconnectgitrepositorylink"

developerconnectgitrepositorylink.NewDeveloperConnectGitRepositoryLinkTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeveloperConnectGitRepositoryLinkTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



