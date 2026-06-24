# `workloadIdentityServiceAgent` Submodule <a name="`workloadIdentityServiceAgent` Submodule" id="@cdktn/provider-google.workloadIdentityServiceAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkloadIdentityServiceAgent <a name="WorkloadIdentityServiceAgent" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/workload_identity_service_agent google_workload_identity_service_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

workloadidentityserviceagent.NewWorkloadIdentityServiceAgent(scope Construct, id *string, config WorkloadIdentityServiceAgentConfig) WorkloadIdentityServiceAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig">WorkloadIdentityServiceAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig">WorkloadIdentityServiceAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.putTimeouts"></a>

```go
func PutTimeouts(value WorkloadIdentityServiceAgentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkloadIdentityServiceAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

workloadidentityserviceagent.WorkloadIdentityServiceAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

workloadidentityserviceagent.WorkloadIdentityServiceAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

workloadidentityserviceagent.WorkloadIdentityServiceAgent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

workloadidentityserviceagent.WorkloadIdentityServiceAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkloadIdentityServiceAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkloadIdentityServiceAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkloadIdentityServiceAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/workload_identity_service_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkloadIdentityServiceAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.serviceAgents">ServiceAgents</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList">WorkloadIdentityServiceAgentServiceAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference">WorkloadIdentityServiceAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceAgents`<sup>Required</sup> <a name="ServiceAgents" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.serviceAgents"></a>

```go
func ServiceAgents() WorkloadIdentityServiceAgentServiceAgentsList
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList">WorkloadIdentityServiceAgentServiceAgentsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeouts"></a>

```go
func Timeouts() WorkloadIdentityServiceAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference">WorkloadIdentityServiceAgentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadIdentityServiceAgentConfig <a name="WorkloadIdentityServiceAgentConfig" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

&workloadidentityserviceagent.WorkloadIdentityServiceAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent resource path. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/workload_identity_service_agent#id WorkloadIdentityServiceAgent#id}. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/workload_identity_service_agent#parent WorkloadIdentityServiceAgent#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/workload_identity_service_agent#id WorkloadIdentityServiceAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.timeouts"></a>

```go
Timeouts WorkloadIdentityServiceAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/workload_identity_service_agent#timeouts WorkloadIdentityServiceAgent#timeouts}

---

### WorkloadIdentityServiceAgentServiceAgents <a name="WorkloadIdentityServiceAgentServiceAgents" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

&workloadidentityserviceagent.WorkloadIdentityServiceAgentServiceAgents {

}
```


### WorkloadIdentityServiceAgentTimeouts <a name="WorkloadIdentityServiceAgentTimeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

&workloadidentityserviceagent.WorkloadIdentityServiceAgentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/workload_identity_service_agent#create WorkloadIdentityServiceAgent#create}. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/workload_identity_service_agent#delete WorkloadIdentityServiceAgent#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/workload_identity_service_agent#create WorkloadIdentityServiceAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/workload_identity_service_agent#delete WorkloadIdentityServiceAgent#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadIdentityServiceAgentServiceAgentsList <a name="WorkloadIdentityServiceAgentServiceAgentsList" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

workloadidentityserviceagent.NewWorkloadIdentityServiceAgentServiceAgentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkloadIdentityServiceAgentServiceAgentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.get"></a>

```go
func Get(index *f64) WorkloadIdentityServiceAgentServiceAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WorkloadIdentityServiceAgentServiceAgentsOutputReference <a name="WorkloadIdentityServiceAgentServiceAgentsOutputReference" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

workloadidentityserviceagent.NewWorkloadIdentityServiceAgentServiceAgentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkloadIdentityServiceAgentServiceAgentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.serviceProducer">ServiceProducer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents">WorkloadIdentityServiceAgentServiceAgents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `ServiceProducer`<sup>Required</sup> <a name="ServiceProducer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.serviceProducer"></a>

```go
func ServiceProducer() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadIdentityServiceAgentServiceAgents
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents">WorkloadIdentityServiceAgentServiceAgents</a>

---


### WorkloadIdentityServiceAgentTimeoutsOutputReference <a name="WorkloadIdentityServiceAgentTimeoutsOutputReference" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workloadidentityserviceagent"

workloadidentityserviceagent.NewWorkloadIdentityServiceAgentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadIdentityServiceAgentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



