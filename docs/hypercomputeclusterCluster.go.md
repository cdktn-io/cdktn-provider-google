# `hypercomputeclusterCluster` Submodule <a name="`hypercomputeclusterCluster` Submodule" id="@cdktn/provider-google.hypercomputeclusterCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HypercomputeclusterCluster <a name="HypercomputeclusterCluster" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster google_hypercomputecluster_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterCluster(scope Construct, id *string, config HypercomputeclusterClusterConfig) HypercomputeclusterCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig">HypercomputeclusterClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig">HypercomputeclusterClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putComputeResources">PutComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putNetworkResources">PutNetworkResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putOrchestrator">PutOrchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putStorageResources">PutStorageResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetComputeResources">ResetComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetOrchestrator">ResetOrchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetStorageResources">ResetStorageResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeResources` <a name="PutComputeResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putComputeResources"></a>

```go
func PutComputeResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putComputeResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkResources` <a name="PutNetworkResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putNetworkResources"></a>

```go
func PutNetworkResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putNetworkResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOrchestrator` <a name="PutOrchestrator" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putOrchestrator"></a>

```go
func PutOrchestrator(value HypercomputeclusterClusterOrchestrator)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putOrchestrator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator">HypercomputeclusterClusterOrchestrator</a>

---

##### `PutStorageResources` <a name="PutStorageResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putStorageResources"></a>

```go
func PutStorageResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putStorageResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putTimeouts"></a>

```go
func PutTimeouts(value HypercomputeclusterClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts">HypercomputeclusterClusterTimeouts</a>

---

##### `ResetComputeResources` <a name="ResetComputeResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetComputeResources"></a>

```go
func ResetComputeResources()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetOrchestrator` <a name="ResetOrchestrator" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetOrchestrator"></a>

```go
func ResetOrchestrator()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStorageResources` <a name="ResetStorageResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetStorageResources"></a>

```go
func ResetStorageResources()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a HypercomputeclusterCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.HypercomputeclusterCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.HypercomputeclusterCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.HypercomputeclusterCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.HypercomputeclusterCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a HypercomputeclusterCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HypercomputeclusterCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HypercomputeclusterCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the HypercomputeclusterCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.computeResources">ComputeResources</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList">HypercomputeclusterClusterComputeResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.networkResources">NetworkResources</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList">HypercomputeclusterClusterNetworkResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.orchestrator">Orchestrator</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference">HypercomputeclusterClusterOrchestratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.reconciling">Reconciling</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.storageResources">StorageResources</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList">HypercomputeclusterClusterStorageResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference">HypercomputeclusterClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.computeResourcesInput">ComputeResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.networkResourcesInput">NetworkResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.orchestratorInput">OrchestratorInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator">HypercomputeclusterClusterOrchestrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.storageResourcesInput">StorageResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputeResources`<sup>Required</sup> <a name="ComputeResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.computeResources"></a>

```go
func ComputeResources() HypercomputeclusterClusterComputeResourcesList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList">HypercomputeclusterClusterComputeResourcesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkResources`<sup>Required</sup> <a name="NetworkResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.networkResources"></a>

```go
func NetworkResources() HypercomputeclusterClusterNetworkResourcesList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList">HypercomputeclusterClusterNetworkResourcesList</a>

---

##### `Orchestrator`<sup>Required</sup> <a name="Orchestrator" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.orchestrator"></a>

```go
func Orchestrator() HypercomputeclusterClusterOrchestratorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference">HypercomputeclusterClusterOrchestratorOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StorageResources`<sup>Required</sup> <a name="StorageResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.storageResources"></a>

```go
func StorageResources() HypercomputeclusterClusterStorageResourcesList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList">HypercomputeclusterClusterStorageResourcesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.timeouts"></a>

```go
func Timeouts() HypercomputeclusterClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference">HypercomputeclusterClusterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ComputeResourcesInput`<sup>Optional</sup> <a name="ComputeResourcesInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.computeResourcesInput"></a>

```go
func ComputeResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NetworkResourcesInput`<sup>Optional</sup> <a name="NetworkResourcesInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.networkResourcesInput"></a>

```go
func NetworkResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `OrchestratorInput`<sup>Optional</sup> <a name="OrchestratorInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.orchestratorInput"></a>

```go
func OrchestratorInput() HypercomputeclusterClusterOrchestrator
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator">HypercomputeclusterClusterOrchestrator</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StorageResourcesInput`<sup>Optional</sup> <a name="StorageResourcesInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.storageResourcesInput"></a>

```go
func StorageResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HypercomputeclusterClusterComputeResources <a name="HypercomputeclusterClusterComputeResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterComputeResources {
	Config: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResources.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig">HypercomputeclusterClusterComputeResourcesConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResources.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}. |

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResources.property.config"></a>

```go
Config HypercomputeclusterClusterComputeResourcesConfig
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig">HypercomputeclusterClusterComputeResourcesConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#config HypercomputeclusterCluster#config}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResources.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### HypercomputeclusterClusterComputeResourcesConfig <a name="HypercomputeclusterClusterComputeResourcesConfig" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterComputeResourcesConfig {
	NewFlexStartInstances: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances,
	NewOnDemandInstances: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances,
	NewReservedInstances: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances,
	NewSpotInstances: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig.property.newFlexStartInstances">NewFlexStartInstances</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances">HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances</a></code> | new_flex_start_instances block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig.property.newOnDemandInstances">NewOnDemandInstances</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances">HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances</a></code> | new_on_demand_instances block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig.property.newReservedInstances">NewReservedInstances</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances">HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances</a></code> | new_reserved_instances block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig.property.newSpotInstances">NewSpotInstances</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances">HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances</a></code> | new_spot_instances block. |

---

##### `NewFlexStartInstances`<sup>Optional</sup> <a name="NewFlexStartInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig.property.newFlexStartInstances"></a>

```go
NewFlexStartInstances HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances">HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances</a>

new_flex_start_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#new_flex_start_instances HypercomputeclusterCluster#new_flex_start_instances}

---

##### `NewOnDemandInstances`<sup>Optional</sup> <a name="NewOnDemandInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig.property.newOnDemandInstances"></a>

```go
NewOnDemandInstances HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances">HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances</a>

new_on_demand_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#new_on_demand_instances HypercomputeclusterCluster#new_on_demand_instances}

---

##### `NewReservedInstances`<sup>Optional</sup> <a name="NewReservedInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig.property.newReservedInstances"></a>

```go
NewReservedInstances HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances">HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances</a>

new_reserved_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#new_reserved_instances HypercomputeclusterCluster#new_reserved_instances}

---

##### `NewSpotInstances`<sup>Optional</sup> <a name="NewSpotInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig.property.newSpotInstances"></a>

```go
NewSpotInstances HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances">HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances</a>

new_spot_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#new_spot_instances HypercomputeclusterCluster#new_spot_instances}

---

### HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances <a name="HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances {
	MachineType: *string,
	MaxDuration: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances.property.machineType">MachineType</a></code> | <code>*string</code> | Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. 'n2-standard-2'. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances.property.maxDuration">MaxDuration</a></code> | <code>*string</code> | Specifies the time limit for created instances. Instances will be terminated at the end of this duration. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances.property.zone">Zone</a></code> | <code>*string</code> | Name of the zone in which VM instances should run, e.g., 'us-central1-a'. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. |

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. 'n2-standard-2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#machine_type HypercomputeclusterCluster#machine_type}

---

##### `MaxDuration`<sup>Required</sup> <a name="MaxDuration" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances.property.maxDuration"></a>

```go
MaxDuration *string
```

- *Type:* *string

Specifies the time limit for created instances. Instances will be terminated at the end of this duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#max_duration HypercomputeclusterCluster#max_duration}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Name of the zone in which VM instances should run, e.g., 'us-central1-a'. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#zone HypercomputeclusterCluster#zone}

---

### HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances <a name="HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances {
	MachineType: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances.property.machineType">MachineType</a></code> | <code>*string</code> | Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. 'n2-standard-2'. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances.property.zone">Zone</a></code> | <code>*string</code> | Name of the zone in which VM instances should run, e.g., 'us-central1-a'. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. |

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. 'n2-standard-2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#machine_type HypercomputeclusterCluster#machine_type}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Name of the zone in which VM instances should run, e.g., 'us-central1-a'. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#zone HypercomputeclusterCluster#zone}

---

### HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances <a name="HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances {
	Reservation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances.property.reservation">Reservation</a></code> | <code>*string</code> | Name of the reservation from which VM instances should be created, in the format 'projects/{project}/zones/{zone}/reservations/{reservation}'. |

---

##### `Reservation`<sup>Optional</sup> <a name="Reservation" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances.property.reservation"></a>

```go
Reservation *string
```

- *Type:* *string

Name of the reservation from which VM instances should be created, in the format 'projects/{project}/zones/{zone}/reservations/{reservation}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#reservation HypercomputeclusterCluster#reservation}

---

### HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances <a name="HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances {
	MachineType: *string,
	Zone: *string,
	TerminationAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances.property.machineType">MachineType</a></code> | <code>*string</code> | Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. 'n2-standard-2'. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances.property.zone">Zone</a></code> | <code>*string</code> | Name of the zone in which VM instances should run, e.g., 'us-central1-a'. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances.property.terminationAction">TerminationAction</a></code> | <code>*string</code> | Specifies the termination action of the instance Possible values: STOP DELETE. |

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. 'n2-standard-2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#machine_type HypercomputeclusterCluster#machine_type}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Name of the zone in which VM instances should run, e.g., 'us-central1-a'. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#zone HypercomputeclusterCluster#zone}

---

##### `TerminationAction`<sup>Optional</sup> <a name="TerminationAction" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances.property.terminationAction"></a>

```go
TerminationAction *string
```

- *Type:* *string

Specifies the termination action of the instance Possible values: STOP DELETE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#termination_action HypercomputeclusterCluster#termination_action}

---

### HypercomputeclusterClusterConfig <a name="HypercomputeclusterClusterConfig" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Location: *string,
	NetworkResources: interface{},
	ComputeResources: interface{},
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Orchestrator: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator,
	Project: *string,
	StorageResources: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | ID of the cluster to create. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.networkResources">NetworkResources</a></code> | <code>interface{}</code> | network_resources block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.computeResources">ComputeResources</a></code> | <code>interface{}</code> | compute_resources block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description of the cluster. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | [Labels](https://cloud.google.com/compute/docs/labeling-resources) applied to the cluster. Labels can be used to organize clusters and to filter them in queries. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.orchestrator">Orchestrator</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator">HypercomputeclusterClusterOrchestrator</a></code> | orchestrator block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#project HypercomputeclusterCluster#project}. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.storageResources">StorageResources</a></code> | <code>interface{}</code> | storage_resources block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts">HypercomputeclusterClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

ID of the cluster to create.

Must start with a lowercase letter,
use only lowercase letters and numbers, and be at most 10 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#cluster_id HypercomputeclusterCluster#cluster_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#location HypercomputeclusterCluster#location}

---

##### `NetworkResources`<sup>Required</sup> <a name="NetworkResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.networkResources"></a>

```go
NetworkResources interface{}
```

- *Type:* interface{}

network_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#network_resources HypercomputeclusterCluster#network_resources}

---

##### `ComputeResources`<sup>Optional</sup> <a name="ComputeResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.computeResources"></a>

```go
ComputeResources interface{}
```

- *Type:* interface{}

compute_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#compute_resources HypercomputeclusterCluster#compute_resources}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#deletion_policy HypercomputeclusterCluster#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#description HypercomputeclusterCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

[Labels](https://cloud.google.com/compute/docs/labeling-resources) applied to the cluster. Labels can be used to organize clusters and to filter them in queries.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#labels HypercomputeclusterCluster#labels}

---

##### `Orchestrator`<sup>Optional</sup> <a name="Orchestrator" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.orchestrator"></a>

```go
Orchestrator HypercomputeclusterClusterOrchestrator
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator">HypercomputeclusterClusterOrchestrator</a>

orchestrator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#orchestrator HypercomputeclusterCluster#orchestrator}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#project HypercomputeclusterCluster#project}.

---

##### `StorageResources`<sup>Optional</sup> <a name="StorageResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.storageResources"></a>

```go
StorageResources interface{}
```

- *Type:* interface{}

storage_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#storage_resources HypercomputeclusterCluster#storage_resources}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterConfig.property.timeouts"></a>

```go
Timeouts HypercomputeclusterClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts">HypercomputeclusterClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#timeouts HypercomputeclusterCluster#timeouts}

---

### HypercomputeclusterClusterNetworkResources <a name="HypercomputeclusterClusterNetworkResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterNetworkResources {
	Id: *string,
	Config: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResources.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResources.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig">HypercomputeclusterClusterNetworkResourcesConfig</a></code> | config block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResources.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResources.property.config"></a>

```go
Config HypercomputeclusterClusterNetworkResourcesConfig
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig">HypercomputeclusterClusterNetworkResourcesConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#config HypercomputeclusterCluster#config}

---

### HypercomputeclusterClusterNetworkResourcesConfig <a name="HypercomputeclusterClusterNetworkResourcesConfig" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterNetworkResourcesConfig {
	ExistingNetwork: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork,
	NewNetwork: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig.property.existingNetwork">ExistingNetwork</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork">HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork</a></code> | existing_network block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig.property.newNetwork">NewNetwork</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork">HypercomputeclusterClusterNetworkResourcesConfigNewNetwork</a></code> | new_network block. |

---

##### `ExistingNetwork`<sup>Optional</sup> <a name="ExistingNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig.property.existingNetwork"></a>

```go
ExistingNetwork HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork">HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork</a>

existing_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#existing_network HypercomputeclusterCluster#existing_network}

---

##### `NewNetwork`<sup>Optional</sup> <a name="NewNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig.property.newNetwork"></a>

```go
NewNetwork HypercomputeclusterClusterNetworkResourcesConfigNewNetwork
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork">HypercomputeclusterClusterNetworkResourcesConfigNewNetwork</a>

new_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#new_network HypercomputeclusterCluster#new_network}

---

### HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork <a name="HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork {
	Network: *string,
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork.property.network">Network</a></code> | <code>*string</code> | Name of the network to import, in the format 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | Particular subnetwork to use, in the format 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork.property.network"></a>

```go
Network *string
```

- *Type:* *string

Name of the network to import, in the format 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#network HypercomputeclusterCluster#network}

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

Particular subnetwork to use, in the format 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#subnetwork HypercomputeclusterCluster#subnetwork}

---

### HypercomputeclusterClusterNetworkResourcesConfigNewNetwork <a name="HypercomputeclusterClusterNetworkResourcesConfigNewNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork {
	Network: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork.property.network">Network</a></code> | <code>*string</code> | Name of the network to create, in the format 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork.property.description">Description</a></code> | <code>*string</code> | Description of the network. Maximum of 2048 characters. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork.property.network"></a>

```go
Network *string
```

- *Type:* *string

Name of the network to create, in the format 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#network HypercomputeclusterCluster#network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the network. Maximum of 2048 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#description HypercomputeclusterCluster#description}

---

### HypercomputeclusterClusterNetworkResourcesNetwork <a name="HypercomputeclusterClusterNetworkResourcesNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetwork.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterNetworkResourcesNetwork {

}
```


### HypercomputeclusterClusterOrchestrator <a name="HypercomputeclusterClusterOrchestrator" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestrator {
	Slurm: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator.property.slurm">Slurm</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm">HypercomputeclusterClusterOrchestratorSlurm</a></code> | slurm block. |

---

##### `Slurm`<sup>Optional</sup> <a name="Slurm" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator.property.slurm"></a>

```go
Slurm HypercomputeclusterClusterOrchestratorSlurm
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm">HypercomputeclusterClusterOrchestratorSlurm</a>

slurm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#slurm HypercomputeclusterCluster#slurm}

---

### HypercomputeclusterClusterOrchestratorSlurm <a name="HypercomputeclusterClusterOrchestratorSlurm" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestratorSlurm {
	LoginNodes: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes,
	NodeSets: interface{},
	Partitions: interface{},
	DefaultPartition: *string,
	EpilogBashScripts: *[]*string,
	PrologBashScripts: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.loginNodes">LoginNodes</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes">HypercomputeclusterClusterOrchestratorSlurmLoginNodes</a></code> | login_nodes block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.nodeSets">NodeSets</a></code> | <code>interface{}</code> | node_sets block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.partitions">Partitions</a></code> | <code>interface{}</code> | partitions block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.defaultPartition">DefaultPartition</a></code> | <code>*string</code> | Default partition to use for submitted jobs that do not explicitly specify a partition. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.epilogBashScripts">EpilogBashScripts</a></code> | <code>*[]*string</code> | Slurm [epilog scripts](https://slurm.schedmd.com/prolog_epilog.html), which will be executed by compute nodes whenever a node finishes running a job. Values must not be empty. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.prologBashScripts">PrologBashScripts</a></code> | <code>*[]*string</code> | Slurm [prolog scripts](https://slurm.schedmd.com/prolog_epilog.html), which will be executed by compute nodes before a node begins running a new job. Values must not be empty. |

---

##### `LoginNodes`<sup>Required</sup> <a name="LoginNodes" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.loginNodes"></a>

```go
LoginNodes HypercomputeclusterClusterOrchestratorSlurmLoginNodes
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes">HypercomputeclusterClusterOrchestratorSlurmLoginNodes</a>

login_nodes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#login_nodes HypercomputeclusterCluster#login_nodes}

---

##### `NodeSets`<sup>Required</sup> <a name="NodeSets" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.nodeSets"></a>

```go
NodeSets interface{}
```

- *Type:* interface{}

node_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#node_sets HypercomputeclusterCluster#node_sets}

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.partitions"></a>

```go
Partitions interface{}
```

- *Type:* interface{}

partitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#partitions HypercomputeclusterCluster#partitions}

---

##### `DefaultPartition`<sup>Optional</sup> <a name="DefaultPartition" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.defaultPartition"></a>

```go
DefaultPartition *string
```

- *Type:* *string

Default partition to use for submitted jobs that do not explicitly specify a partition.

Required if and only if there is more than one partition, in
which case it must match the id of one of the partitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#default_partition HypercomputeclusterCluster#default_partition}

---

##### `EpilogBashScripts`<sup>Optional</sup> <a name="EpilogBashScripts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.epilogBashScripts"></a>

```go
EpilogBashScripts *[]*string
```

- *Type:* *[]*string

Slurm [epilog scripts](https://slurm.schedmd.com/prolog_epilog.html), which will be executed by compute nodes whenever a node finishes running a job. Values must not be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#epilog_bash_scripts HypercomputeclusterCluster#epilog_bash_scripts}

---

##### `PrologBashScripts`<sup>Optional</sup> <a name="PrologBashScripts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm.property.prologBashScripts"></a>

```go
PrologBashScripts *[]*string
```

- *Type:* *[]*string

Slurm [prolog scripts](https://slurm.schedmd.com/prolog_epilog.html), which will be executed by compute nodes before a node begins running a new job. Values must not be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#prolog_bash_scripts HypercomputeclusterCluster#prolog_bash_scripts}

---

### HypercomputeclusterClusterOrchestratorSlurmLoginNodes <a name="HypercomputeclusterClusterOrchestratorSlurmLoginNodes" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes {
	Count: *string,
	MachineType: *string,
	Zone: *string,
	BootDisk: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk,
	EnableOsLogin: interface{},
	EnablePublicIps: interface{},
	Labels: *map[string]*string,
	StartupScript: *string,
	StorageConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.count">Count</a></code> | <code>*string</code> | Number of login node instances to create. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.machineType">MachineType</a></code> | <code>*string</code> | Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use for login nodes, e.g. 'n2-standard-2'. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.zone">Zone</a></code> | <code>*string</code> | Name of the zone in which login nodes should run, e.g., 'us-central1-a'. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk">HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.enableOsLogin">EnableOsLogin</a></code> | <code>interface{}</code> | Whether [OS Login](https://cloud.google.com/compute/docs/oslogin) should be enabled on login node instances. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.enablePublicIps">EnablePublicIps</a></code> | <code>interface{}</code> | Whether login node instances should be assigned [external IP addresses](https://cloud.google.com/compute/docs/ip-addresses#externaladdresses). |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.labels">Labels</a></code> | <code>*map[string]*string</code> | [Labels](https://cloud.google.com/compute/docs/labeling-resources) that should be applied to each login node instance. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.startupScript">StartupScript</a></code> | <code>*string</code> | [Startup script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux) to be run on each login node instance. Max 256KB. The script must complete within the system-defined default timeout of 5 minutes. For tasks that require more time, consider running them in the background using methods such as '&' or 'nohup'. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.storageConfigs">StorageConfigs</a></code> | <code>interface{}</code> | storage_configs block. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.count"></a>

```go
Count *string
```

- *Type:* *string

Number of login node instances to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#count HypercomputeclusterCluster#count}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use for login nodes, e.g. 'n2-standard-2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#machine_type HypercomputeclusterCluster#machine_type}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Name of the zone in which login nodes should run, e.g., 'us-central1-a'. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#zone HypercomputeclusterCluster#zone}

---

##### `BootDisk`<sup>Optional</sup> <a name="BootDisk" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.bootDisk"></a>

```go
BootDisk HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk">HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#boot_disk HypercomputeclusterCluster#boot_disk}

---

##### `EnableOsLogin`<sup>Optional</sup> <a name="EnableOsLogin" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.enableOsLogin"></a>

```go
EnableOsLogin interface{}
```

- *Type:* interface{}

Whether [OS Login](https://cloud.google.com/compute/docs/oslogin) should be enabled on login node instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#enable_os_login HypercomputeclusterCluster#enable_os_login}

---

##### `EnablePublicIps`<sup>Optional</sup> <a name="EnablePublicIps" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.enablePublicIps"></a>

```go
EnablePublicIps interface{}
```

- *Type:* interface{}

Whether login node instances should be assigned [external IP addresses](https://cloud.google.com/compute/docs/ip-addresses#externaladdresses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#enable_public_ips HypercomputeclusterCluster#enable_public_ips}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

[Labels](https://cloud.google.com/compute/docs/labeling-resources) that should be applied to each login node instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#labels HypercomputeclusterCluster#labels}

---

##### `StartupScript`<sup>Optional</sup> <a name="StartupScript" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.startupScript"></a>

```go
StartupScript *string
```

- *Type:* *string

[Startup script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux) to be run on each login node instance. Max 256KB. The script must complete within the system-defined default timeout of 5 minutes. For tasks that require more time, consider running them in the background using methods such as '&' or 'nohup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#startup_script HypercomputeclusterCluster#startup_script}

---

##### `StorageConfigs`<sup>Optional</sup> <a name="StorageConfigs" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes.property.storageConfigs"></a>

```go
StorageConfigs interface{}
```

- *Type:* interface{}

storage_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#storage_configs HypercomputeclusterCluster#storage_configs}

---

### HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk <a name="HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk {
	SizeGb: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk.property.sizeGb">SizeGb</a></code> | <code>*string</code> | Size of the disk in gigabytes. Must be at least 10GB. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk.property.type">Type</a></code> | <code>*string</code> | [Persistent disk type](https://cloud.google.com/compute/docs/disks#disk-types), in the format 'projects/{project}/zones/{zone}/diskTypes/{disk_type}'. |

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk.property.sizeGb"></a>

```go
SizeGb *string
```

- *Type:* *string

Size of the disk in gigabytes. Must be at least 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#size_gb HypercomputeclusterCluster#size_gb}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk.property.type"></a>

```go
Type *string
```

- *Type:* *string

[Persistent disk type](https://cloud.google.com/compute/docs/disks#disk-types), in the format 'projects/{project}/zones/{zone}/diskTypes/{disk_type}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#type HypercomputeclusterCluster#type}

---

### HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances <a name="HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances {

}
```


### HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs <a name="HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs {
	Id: *string,
	LocalMount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs.property.id">Id</a></code> | <code>*string</code> | ID of the storage resource to mount, which must match a key in the cluster's [storage_resources](Cluster.storage_resources). |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs.property.localMount">LocalMount</a></code> | <code>*string</code> | A directory inside the VM instance's file system where the storage resource should be mounted (e.g., '/mnt/share'). |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of the storage resource to mount, which must match a key in the cluster's [storage_resources](Cluster.storage_resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalMount`<sup>Required</sup> <a name="LocalMount" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigs.property.localMount"></a>

```go
LocalMount *string
```

- *Type:* *string

A directory inside the VM instance's file system where the storage resource should be mounted (e.g., '/mnt/share').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#local_mount HypercomputeclusterCluster#local_mount}

---

### HypercomputeclusterClusterOrchestratorSlurmNodeSets <a name="HypercomputeclusterClusterOrchestratorSlurmNodeSets" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets {
	Id: *string,
	ComputeId: *string,
	ComputeInstance: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance,
	MaxDynamicNodeCount: *string,
	StaticNodeCount: *string,
	StorageConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.id">Id</a></code> | <code>*string</code> | Identifier for the nodeset, which allows it to be referenced by partitions. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.computeId">ComputeId</a></code> | <code>*string</code> | ID of the compute resource on which this nodeset will run. Must match a key in the cluster's [compute_resources](Cluster.compute_resources). |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.computeInstance">ComputeInstance</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance</a></code> | compute_instance block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.maxDynamicNodeCount">MaxDynamicNodeCount</a></code> | <code>*string</code> | Controls how many additional nodes a cluster can bring online to handle workloads. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.staticNodeCount">StaticNodeCount</a></code> | <code>*string</code> | Number of nodes to be statically created for this nodeset. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.storageConfigs">StorageConfigs</a></code> | <code>interface{}</code> | storage_configs block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.id"></a>

```go
Id *string
```

- *Type:* *string

Identifier for the nodeset, which allows it to be referenced by partitions.

Must conform to
[RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case,
alphanumeric, and at most 63 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ComputeId`<sup>Optional</sup> <a name="ComputeId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.computeId"></a>

```go
ComputeId *string
```

- *Type:* *string

ID of the compute resource on which this nodeset will run. Must match a key in the cluster's [compute_resources](Cluster.compute_resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#compute_id HypercomputeclusterCluster#compute_id}

---

##### `ComputeInstance`<sup>Optional</sup> <a name="ComputeInstance" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.computeInstance"></a>

```go
ComputeInstance HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance</a>

compute_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#compute_instance HypercomputeclusterCluster#compute_instance}

---

##### `MaxDynamicNodeCount`<sup>Optional</sup> <a name="MaxDynamicNodeCount" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.maxDynamicNodeCount"></a>

```go
MaxDynamicNodeCount *string
```

- *Type:* *string

Controls how many additional nodes a cluster can bring online to handle workloads.

Set this value to enable dynamic node creation and limit the
number of additional nodes the cluster can bring online. Leave empty if you
do not want the cluster to create nodes dynamically, and instead rely only
on static nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#max_dynamic_node_count HypercomputeclusterCluster#max_dynamic_node_count}

---

##### `StaticNodeCount`<sup>Optional</sup> <a name="StaticNodeCount" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.staticNodeCount"></a>

```go
StaticNodeCount *string
```

- *Type:* *string

Number of nodes to be statically created for this nodeset.

The cluster will
attempt to ensure that at least this many nodes exist at all times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#static_node_count HypercomputeclusterCluster#static_node_count}

---

##### `StorageConfigs`<sup>Optional</sup> <a name="StorageConfigs" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSets.property.storageConfigs"></a>

```go
StorageConfigs interface{}
```

- *Type:* interface{}

storage_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#storage_configs HypercomputeclusterCluster#storage_configs}

---

### HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance <a name="HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance {
	BootDisk: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk,
	Labels: *map[string]*string,
	StartupScript: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | [Labels](https://cloud.google.com/compute/docs/labeling-resources) that should be applied to each VM instance in the nodeset. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance.property.startupScript">StartupScript</a></code> | <code>*string</code> | [Startup script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux) to be run on each VM instance in the nodeset. Max 256KB. |

---

##### `BootDisk`<sup>Optional</sup> <a name="BootDisk" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance.property.bootDisk"></a>

```go
BootDisk HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#boot_disk HypercomputeclusterCluster#boot_disk}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

[Labels](https://cloud.google.com/compute/docs/labeling-resources) that should be applied to each VM instance in the nodeset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#labels HypercomputeclusterCluster#labels}

---

##### `StartupScript`<sup>Optional</sup> <a name="StartupScript" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance.property.startupScript"></a>

```go
StartupScript *string
```

- *Type:* *string

[Startup script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux) to be run on each VM instance in the nodeset. Max 256KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#startup_script HypercomputeclusterCluster#startup_script}

---

### HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk <a name="HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk {
	SizeGb: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk.property.sizeGb">SizeGb</a></code> | <code>*string</code> | Size of the disk in gigabytes. Must be at least 10GB. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk.property.type">Type</a></code> | <code>*string</code> | [Persistent disk type](https://cloud.google.com/compute/docs/disks#disk-types), in the format 'projects/{project}/zones/{zone}/diskTypes/{disk_type}'. |

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk.property.sizeGb"></a>

```go
SizeGb *string
```

- *Type:* *string

Size of the disk in gigabytes. Must be at least 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#size_gb HypercomputeclusterCluster#size_gb}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk.property.type"></a>

```go
Type *string
```

- *Type:* *string

[Persistent disk type](https://cloud.google.com/compute/docs/disks#disk-types), in the format 'projects/{project}/zones/{zone}/diskTypes/{disk_type}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#type HypercomputeclusterCluster#type}

---

### HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs <a name="HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs {
	Id: *string,
	LocalMount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs.property.id">Id</a></code> | <code>*string</code> | ID of the storage resource to mount, which must match a key in the cluster's [storage_resources](Cluster.storage_resources). |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs.property.localMount">LocalMount</a></code> | <code>*string</code> | A directory inside the VM instance's file system where the storage resource should be mounted (e.g., '/mnt/share'). |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of the storage resource to mount, which must match a key in the cluster's [storage_resources](Cluster.storage_resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalMount`<sup>Required</sup> <a name="LocalMount" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigs.property.localMount"></a>

```go
LocalMount *string
```

- *Type:* *string

A directory inside the VM instance's file system where the storage resource should be mounted (e.g., '/mnt/share').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#local_mount HypercomputeclusterCluster#local_mount}

---

### HypercomputeclusterClusterOrchestratorSlurmPartitions <a name="HypercomputeclusterClusterOrchestratorSlurmPartitions" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterOrchestratorSlurmPartitions {
	Id: *string,
	NodeSetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitions.property.id">Id</a></code> | <code>*string</code> | ID of the partition, which is how users will identify it. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitions.property.nodeSetIds">NodeSetIds</a></code> | <code>*[]*string</code> | IDs of the nodesets that make up this partition. Values must match SlurmNodeSet.id. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitions.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of the partition, which is how users will identify it.

Must conform to
[RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case,
alphanumeric, and at most 63 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodeSetIds`<sup>Required</sup> <a name="NodeSetIds" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitions.property.nodeSetIds"></a>

```go
NodeSetIds *[]*string
```

- *Type:* *[]*string

IDs of the nodesets that make up this partition. Values must match SlurmNodeSet.id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#node_set_ids HypercomputeclusterCluster#node_set_ids}

---

### HypercomputeclusterClusterStorageResources <a name="HypercomputeclusterClusterStorageResources" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResources {
	Config: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResources.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig">HypercomputeclusterClusterStorageResourcesConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResources.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}. |

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResources.property.config"></a>

```go
Config HypercomputeclusterClusterStorageResourcesConfig
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig">HypercomputeclusterClusterStorageResourcesConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#config HypercomputeclusterCluster#config}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResources.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#id HypercomputeclusterCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### HypercomputeclusterClusterStorageResourcesBucket <a name="HypercomputeclusterClusterStorageResourcesBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesBucket {

}
```


### HypercomputeclusterClusterStorageResourcesConfig <a name="HypercomputeclusterClusterStorageResourcesConfig" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesConfig {
	ExistingBucket: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket,
	ExistingFilestore: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore,
	ExistingLustre: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre,
	NewBucket: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket,
	NewFilestore: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore,
	NewLustre: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.existingBucket">ExistingBucket</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket">HypercomputeclusterClusterStorageResourcesConfigExistingBucket</a></code> | existing_bucket block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.existingFilestore">ExistingFilestore</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore">HypercomputeclusterClusterStorageResourcesConfigExistingFilestore</a></code> | existing_filestore block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.existingLustre">ExistingLustre</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre">HypercomputeclusterClusterStorageResourcesConfigExistingLustre</a></code> | existing_lustre block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.newBucket">NewBucket</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket">HypercomputeclusterClusterStorageResourcesConfigNewBucket</a></code> | new_bucket block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.newFilestore">NewFilestore</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore">HypercomputeclusterClusterStorageResourcesConfigNewFilestore</a></code> | new_filestore block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.newLustre">NewLustre</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre">HypercomputeclusterClusterStorageResourcesConfigNewLustre</a></code> | new_lustre block. |

---

##### `ExistingBucket`<sup>Optional</sup> <a name="ExistingBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.existingBucket"></a>

```go
ExistingBucket HypercomputeclusterClusterStorageResourcesConfigExistingBucket
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket">HypercomputeclusterClusterStorageResourcesConfigExistingBucket</a>

existing_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#existing_bucket HypercomputeclusterCluster#existing_bucket}

---

##### `ExistingFilestore`<sup>Optional</sup> <a name="ExistingFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.existingFilestore"></a>

```go
ExistingFilestore HypercomputeclusterClusterStorageResourcesConfigExistingFilestore
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore">HypercomputeclusterClusterStorageResourcesConfigExistingFilestore</a>

existing_filestore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#existing_filestore HypercomputeclusterCluster#existing_filestore}

---

##### `ExistingLustre`<sup>Optional</sup> <a name="ExistingLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.existingLustre"></a>

```go
ExistingLustre HypercomputeclusterClusterStorageResourcesConfigExistingLustre
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre">HypercomputeclusterClusterStorageResourcesConfigExistingLustre</a>

existing_lustre block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#existing_lustre HypercomputeclusterCluster#existing_lustre}

---

##### `NewBucket`<sup>Optional</sup> <a name="NewBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.newBucket"></a>

```go
NewBucket HypercomputeclusterClusterStorageResourcesConfigNewBucket
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket">HypercomputeclusterClusterStorageResourcesConfigNewBucket</a>

new_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#new_bucket HypercomputeclusterCluster#new_bucket}

---

##### `NewFilestore`<sup>Optional</sup> <a name="NewFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.newFilestore"></a>

```go
NewFilestore HypercomputeclusterClusterStorageResourcesConfigNewFilestore
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore">HypercomputeclusterClusterStorageResourcesConfigNewFilestore</a>

new_filestore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#new_filestore HypercomputeclusterCluster#new_filestore}

---

##### `NewLustre`<sup>Optional</sup> <a name="NewLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig.property.newLustre"></a>

```go
NewLustre HypercomputeclusterClusterStorageResourcesConfigNewLustre
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre">HypercomputeclusterClusterStorageResourcesConfigNewLustre</a>

new_lustre block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#new_lustre HypercomputeclusterCluster#new_lustre}

---

### HypercomputeclusterClusterStorageResourcesConfigExistingBucket <a name="HypercomputeclusterClusterStorageResourcesConfigExistingBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket {
	Bucket: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket.property.bucket">Bucket</a></code> | <code>*string</code> | Name of the Cloud Storage bucket to import. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Name of the Cloud Storage bucket to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#bucket HypercomputeclusterCluster#bucket}

---

### HypercomputeclusterClusterStorageResourcesConfigExistingFilestore <a name="HypercomputeclusterClusterStorageResourcesConfigExistingFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore {
	Filestore: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore.property.filestore">Filestore</a></code> | <code>*string</code> | Name of the Filestore instance to import, in the format 'projects/{project}/locations/{location}/instances/{instance}'. |

---

##### `Filestore`<sup>Required</sup> <a name="Filestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore.property.filestore"></a>

```go
Filestore *string
```

- *Type:* *string

Name of the Filestore instance to import, in the format 'projects/{project}/locations/{location}/instances/{instance}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#filestore HypercomputeclusterCluster#filestore}

---

### HypercomputeclusterClusterStorageResourcesConfigExistingLustre <a name="HypercomputeclusterClusterStorageResourcesConfigExistingLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre {
	Lustre: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre.property.lustre">Lustre</a></code> | <code>*string</code> | Name of the Managed Lustre instance to import, in the format 'projects/{project}/locations/{location}/instances/{instance}'. |

---

##### `Lustre`<sup>Required</sup> <a name="Lustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre.property.lustre"></a>

```go
Lustre *string
```

- *Type:* *string

Name of the Managed Lustre instance to import, in the format 'projects/{project}/locations/{location}/instances/{instance}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#lustre HypercomputeclusterCluster#lustre}

---

### HypercomputeclusterClusterStorageResourcesConfigNewBucket <a name="HypercomputeclusterClusterStorageResourcesConfigNewBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket {
	Bucket: *string,
	Autoclass: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass,
	HierarchicalNamespace: github.com/cdktn-io/cdktn-provider-google-go/google/v19.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace,
	StorageClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket.property.bucket">Bucket</a></code> | <code>*string</code> | Name of the Cloud Storage bucket to create. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket.property.autoclass">Autoclass</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass">HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket.property.hierarchicalNamespace">HierarchicalNamespace</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace">HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace</a></code> | hierarchical_namespace block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket.property.storageClass">StorageClass</a></code> | <code>*string</code> | If set, uses the provided storage class as the bucket's default storage class. Possible values: STANDARD NEARLINE COLDLINE ARCHIVE. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Name of the Cloud Storage bucket to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#bucket HypercomputeclusterCluster#bucket}

---

##### `Autoclass`<sup>Optional</sup> <a name="Autoclass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket.property.autoclass"></a>

```go
Autoclass HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass">HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#autoclass HypercomputeclusterCluster#autoclass}

---

##### `HierarchicalNamespace`<sup>Optional</sup> <a name="HierarchicalNamespace" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket.property.hierarchicalNamespace"></a>

```go
HierarchicalNamespace HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace">HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace</a>

hierarchical_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#hierarchical_namespace HypercomputeclusterCluster#hierarchical_namespace}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

If set, uses the provided storage class as the bucket's default storage class. Possible values: STANDARD NEARLINE COLDLINE ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#storage_class HypercomputeclusterCluster#storage_class}

---

### HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass <a name="HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass {
	Enabled: interface{},
	TerminalStorageClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables Auto-class feature. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass.property.terminalStorageClass">TerminalStorageClass</a></code> | <code>*string</code> | Terminal storage class of the autoclass bucket Possible values: NEARLINE ARCHIVE. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables Auto-class feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#enabled HypercomputeclusterCluster#enabled}

---

##### `TerminalStorageClass`<sup>Optional</sup> <a name="TerminalStorageClass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass.property.terminalStorageClass"></a>

```go
TerminalStorageClass *string
```

- *Type:* *string

Terminal storage class of the autoclass bucket Possible values: NEARLINE ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#terminal_storage_class HypercomputeclusterCluster#terminal_storage_class}

---

### HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace <a name="HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables hierarchical namespace setup for the bucket. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables hierarchical namespace setup for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#enabled HypercomputeclusterCluster#enabled}

---

### HypercomputeclusterClusterStorageResourcesConfigNewFilestore <a name="HypercomputeclusterClusterStorageResourcesConfigNewFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore {
	FileShares: interface{},
	Filestore: *string,
	Tier: *string,
	Description: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.property.fileShares">FileShares</a></code> | <code>interface{}</code> | file_shares block. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.property.filestore">Filestore</a></code> | <code>*string</code> | Name of the Filestore instance to create, in the format 'projects/{project}/locations/{location}/instances/{instance}'. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.property.tier">Tier</a></code> | <code>*string</code> | Service tier to use for the instance. Possible values: ZONAL REGIONAL Possible values: ["TIER_UNSPECIFIED", "ZONAL", "REGIONAL"]. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.property.description">Description</a></code> | <code>*string</code> | Description of the instance. Maximum of 2048 characters. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.property.protocol">Protocol</a></code> | <code>*string</code> | Access protocol to use for all file shares in the instance. |

---

##### `FileShares`<sup>Required</sup> <a name="FileShares" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.property.fileShares"></a>

```go
FileShares interface{}
```

- *Type:* interface{}

file_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#file_shares HypercomputeclusterCluster#file_shares}

---

##### `Filestore`<sup>Required</sup> <a name="Filestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.property.filestore"></a>

```go
Filestore *string
```

- *Type:* *string

Name of the Filestore instance to create, in the format 'projects/{project}/locations/{location}/instances/{instance}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#filestore HypercomputeclusterCluster#filestore}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Service tier to use for the instance. Possible values: ZONAL REGIONAL Possible values: ["TIER_UNSPECIFIED", "ZONAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#tier HypercomputeclusterCluster#tier}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the instance. Maximum of 2048 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#description HypercomputeclusterCluster#description}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Access protocol to use for all file shares in the instance.

Defaults to NFS
V3 if not set.
Possible values:
NFSV3
NFSV41 Possible values: ["PROTOCOL_UNSPECIFIED", "NFSV3", "NFSV41"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#protocol HypercomputeclusterCluster#protocol}

---

### HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares <a name="HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares {
	CapacityGb: *string,
	FileShare: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares.property.capacityGb">CapacityGb</a></code> | <code>*string</code> | Size of the filestore in GB. Must be between 1024 and 102400, and must meet scalability requirements described at https://cloud.google.com/filestore/docs/service-tiers. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares.property.fileShare">FileShare</a></code> | <code>*string</code> | Filestore share location. |

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares.property.capacityGb"></a>

```go
CapacityGb *string
```

- *Type:* *string

Size of the filestore in GB. Must be between 1024 and 102400, and must meet scalability requirements described at https://cloud.google.com/filestore/docs/service-tiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#capacity_gb HypercomputeclusterCluster#capacity_gb}

---

##### `FileShare`<sup>Required</sup> <a name="FileShare" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileShares.property.fileShare"></a>

```go
FileShare *string
```

- *Type:* *string

Filestore share location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#file_share HypercomputeclusterCluster#file_share}

---

### HypercomputeclusterClusterStorageResourcesConfigNewLustre <a name="HypercomputeclusterClusterStorageResourcesConfigNewLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre {
	CapacityGb: *string,
	Filesystem: *string,
	Lustre: *string,
	Description: *string,
	PerUnitStorageThroughput: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.property.capacityGb">CapacityGb</a></code> | <code>*string</code> | Storage capacity of the instance in gibibytes (GiB). Allowed values are between 18000 and 7632000. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.property.filesystem">Filesystem</a></code> | <code>*string</code> | Filesystem name for this instance. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.property.lustre">Lustre</a></code> | <code>*string</code> | Name of the Managed Lustre instance to create, in the format 'projects/{project}/locations/{location}/instances/{instance}'. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.property.description">Description</a></code> | <code>*string</code> | Description of the Managed Lustre instance. Maximum of 2048 characters. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>*string</code> | Throughput of the instance in MB/s/TiB. |

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.property.capacityGb"></a>

```go
CapacityGb *string
```

- *Type:* *string

Storage capacity of the instance in gibibytes (GiB). Allowed values are between 18000 and 7632000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#capacity_gb HypercomputeclusterCluster#capacity_gb}

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.property.filesystem"></a>

```go
Filesystem *string
```

- *Type:* *string

Filesystem name for this instance.

This name is used by client-side tools,
including when mounting the instance. Must be 8 characters or less and can
only contain letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#filesystem HypercomputeclusterCluster#filesystem}

---

##### `Lustre`<sup>Required</sup> <a name="Lustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.property.lustre"></a>

```go
Lustre *string
```

- *Type:* *string

Name of the Managed Lustre instance to create, in the format 'projects/{project}/locations/{location}/instances/{instance}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#lustre HypercomputeclusterCluster#lustre}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the Managed Lustre instance. Maximum of 2048 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#description HypercomputeclusterCluster#description}

---

##### `PerUnitStorageThroughput`<sup>Optional</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre.property.perUnitStorageThroughput"></a>

```go
PerUnitStorageThroughput *string
```

- *Type:* *string

Throughput of the instance in MB/s/TiB.

Valid values are 125, 250,
500, 1000. See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#per_unit_storage_throughput HypercomputeclusterCluster#per_unit_storage_throughput}

---

### HypercomputeclusterClusterStorageResourcesFilestore <a name="HypercomputeclusterClusterStorageResourcesFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesFilestore {

}
```


### HypercomputeclusterClusterStorageResourcesLustre <a name="HypercomputeclusterClusterStorageResourcesLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustre"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustre.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterStorageResourcesLustre {

}
```


### HypercomputeclusterClusterTimeouts <a name="HypercomputeclusterClusterTimeouts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

&hypercomputeclustercluster.HypercomputeclusterClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#create HypercomputeclusterCluster#create}. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#delete HypercomputeclusterCluster#delete}. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#update HypercomputeclusterCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#create HypercomputeclusterCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#delete HypercomputeclusterCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/hypercomputecluster_cluster#update HypercomputeclusterCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference <a name="HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.maxDurationInput">MaxDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.maxDuration">MaxDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances">HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxDurationInput`<sup>Optional</sup> <a name="MaxDurationInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.maxDurationInput"></a>

```go
func MaxDurationInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxDuration`<sup>Required</sup> <a name="MaxDuration" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.maxDuration"></a>

```go
func MaxDuration() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances">HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances</a>

---


### HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference <a name="HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances">HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances">HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances</a>

---


### HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference <a name="HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.resetReservation">ResetReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReservation` <a name="ResetReservation" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.resetReservation"></a>

```go
func ResetReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.property.reservationInput">ReservationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.property.reservation">Reservation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances">HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReservationInput`<sup>Optional</sup> <a name="ReservationInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.property.reservationInput"></a>

```go
func ReservationInput() *string
```

- *Type:* *string

---

##### `Reservation`<sup>Required</sup> <a name="Reservation" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.property.reservation"></a>

```go
func Reservation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances">HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances</a>

---


### HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference <a name="HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.resetTerminationAction">ResetTerminationAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTerminationAction` <a name="ResetTerminationAction" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.resetTerminationAction"></a>

```go
func ResetTerminationAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.terminationActionInput">TerminationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.terminationAction">TerminationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances">HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `TerminationActionInput`<sup>Optional</sup> <a name="TerminationActionInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.terminationActionInput"></a>

```go
func TerminationActionInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `TerminationAction`<sup>Required</sup> <a name="TerminationAction" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.terminationAction"></a>

```go
func TerminationAction() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances">HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances</a>

---


### HypercomputeclusterClusterComputeResourcesConfigOutputReference <a name="HypercomputeclusterClusterComputeResourcesConfigOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterComputeResourcesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterComputeResourcesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewFlexStartInstances">PutNewFlexStartInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewOnDemandInstances">PutNewOnDemandInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewReservedInstances">PutNewReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewSpotInstances">PutNewSpotInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resetNewFlexStartInstances">ResetNewFlexStartInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resetNewOnDemandInstances">ResetNewOnDemandInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resetNewReservedInstances">ResetNewReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resetNewSpotInstances">ResetNewSpotInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNewFlexStartInstances` <a name="PutNewFlexStartInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewFlexStartInstances"></a>

```go
func PutNewFlexStartInstances(value HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewFlexStartInstances.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances">HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances</a>

---

##### `PutNewOnDemandInstances` <a name="PutNewOnDemandInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewOnDemandInstances"></a>

```go
func PutNewOnDemandInstances(value HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewOnDemandInstances.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances">HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances</a>

---

##### `PutNewReservedInstances` <a name="PutNewReservedInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewReservedInstances"></a>

```go
func PutNewReservedInstances(value HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewReservedInstances.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances">HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances</a>

---

##### `PutNewSpotInstances` <a name="PutNewSpotInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewSpotInstances"></a>

```go
func PutNewSpotInstances(value HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.putNewSpotInstances.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances">HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances</a>

---

##### `ResetNewFlexStartInstances` <a name="ResetNewFlexStartInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resetNewFlexStartInstances"></a>

```go
func ResetNewFlexStartInstances()
```

##### `ResetNewOnDemandInstances` <a name="ResetNewOnDemandInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resetNewOnDemandInstances"></a>

```go
func ResetNewOnDemandInstances()
```

##### `ResetNewReservedInstances` <a name="ResetNewReservedInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resetNewReservedInstances"></a>

```go
func ResetNewReservedInstances()
```

##### `ResetNewSpotInstances` <a name="ResetNewSpotInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.resetNewSpotInstances"></a>

```go
func ResetNewSpotInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newFlexStartInstances">NewFlexStartInstances</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference">HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newOnDemandInstances">NewOnDemandInstances</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference">HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newReservedInstances">NewReservedInstances</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference">HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newSpotInstances">NewSpotInstances</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference">HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newFlexStartInstancesInput">NewFlexStartInstancesInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances">HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newOnDemandInstancesInput">NewOnDemandInstancesInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances">HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newReservedInstancesInput">NewReservedInstancesInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances">HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newSpotInstancesInput">NewSpotInstancesInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances">HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig">HypercomputeclusterClusterComputeResourcesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewFlexStartInstances`<sup>Required</sup> <a name="NewFlexStartInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newFlexStartInstances"></a>

```go
func NewFlexStartInstances() HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference">HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstancesOutputReference</a>

---

##### `NewOnDemandInstances`<sup>Required</sup> <a name="NewOnDemandInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newOnDemandInstances"></a>

```go
func NewOnDemandInstances() HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference">HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstancesOutputReference</a>

---

##### `NewReservedInstances`<sup>Required</sup> <a name="NewReservedInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newReservedInstances"></a>

```go
func NewReservedInstances() HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference">HypercomputeclusterClusterComputeResourcesConfigNewReservedInstancesOutputReference</a>

---

##### `NewSpotInstances`<sup>Required</sup> <a name="NewSpotInstances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newSpotInstances"></a>

```go
func NewSpotInstances() HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference">HypercomputeclusterClusterComputeResourcesConfigNewSpotInstancesOutputReference</a>

---

##### `NewFlexStartInstancesInput`<sup>Optional</sup> <a name="NewFlexStartInstancesInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newFlexStartInstancesInput"></a>

```go
func NewFlexStartInstancesInput() HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances">HypercomputeclusterClusterComputeResourcesConfigNewFlexStartInstances</a>

---

##### `NewOnDemandInstancesInput`<sup>Optional</sup> <a name="NewOnDemandInstancesInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newOnDemandInstancesInput"></a>

```go
func NewOnDemandInstancesInput() HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances">HypercomputeclusterClusterComputeResourcesConfigNewOnDemandInstances</a>

---

##### `NewReservedInstancesInput`<sup>Optional</sup> <a name="NewReservedInstancesInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newReservedInstancesInput"></a>

```go
func NewReservedInstancesInput() HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances">HypercomputeclusterClusterComputeResourcesConfigNewReservedInstances</a>

---

##### `NewSpotInstancesInput`<sup>Optional</sup> <a name="NewSpotInstancesInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.newSpotInstancesInput"></a>

```go
func NewSpotInstancesInput() HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances">HypercomputeclusterClusterComputeResourcesConfigNewSpotInstances</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterComputeResourcesConfig
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig">HypercomputeclusterClusterComputeResourcesConfig</a>

---


### HypercomputeclusterClusterComputeResourcesList <a name="HypercomputeclusterClusterComputeResourcesList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterComputeResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterComputeResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterComputeResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterComputeResourcesOutputReference <a name="HypercomputeclusterClusterComputeResourcesOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterComputeResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterComputeResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.putConfig">PutConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.putConfig"></a>

```go
func PutConfig(value HypercomputeclusterClusterComputeResourcesConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig">HypercomputeclusterClusterComputeResourcesConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference">HypercomputeclusterClusterComputeResourcesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig">HypercomputeclusterClusterComputeResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.config"></a>

```go
func Config() HypercomputeclusterClusterComputeResourcesConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfigOutputReference">HypercomputeclusterClusterComputeResourcesConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.configInput"></a>

```go
func ConfigInput() HypercomputeclusterClusterComputeResourcesConfig
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesConfig">HypercomputeclusterClusterComputeResourcesConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterComputeResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference <a name="HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork">HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork">HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork</a>

---


### HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference <a name="HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork">HypercomputeclusterClusterNetworkResourcesConfigNewNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterNetworkResourcesConfigNewNetwork
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork">HypercomputeclusterClusterNetworkResourcesConfigNewNetwork</a>

---


### HypercomputeclusterClusterNetworkResourcesConfigOutputReference <a name="HypercomputeclusterClusterNetworkResourcesConfigOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterNetworkResourcesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterNetworkResourcesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.putExistingNetwork">PutExistingNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.putNewNetwork">PutNewNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.resetExistingNetwork">ResetExistingNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.resetNewNetwork">ResetNewNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExistingNetwork` <a name="PutExistingNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.putExistingNetwork"></a>

```go
func PutExistingNetwork(value HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.putExistingNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork">HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork</a>

---

##### `PutNewNetwork` <a name="PutNewNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.putNewNetwork"></a>

```go
func PutNewNetwork(value HypercomputeclusterClusterNetworkResourcesConfigNewNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.putNewNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork">HypercomputeclusterClusterNetworkResourcesConfigNewNetwork</a>

---

##### `ResetExistingNetwork` <a name="ResetExistingNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.resetExistingNetwork"></a>

```go
func ResetExistingNetwork()
```

##### `ResetNewNetwork` <a name="ResetNewNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.resetNewNetwork"></a>

```go
func ResetNewNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.existingNetwork">ExistingNetwork</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference">HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.newNetwork">NewNetwork</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference">HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.existingNetworkInput">ExistingNetworkInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork">HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.newNetworkInput">NewNetworkInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork">HypercomputeclusterClusterNetworkResourcesConfigNewNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig">HypercomputeclusterClusterNetworkResourcesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExistingNetwork`<sup>Required</sup> <a name="ExistingNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.existingNetwork"></a>

```go
func ExistingNetwork() HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference">HypercomputeclusterClusterNetworkResourcesConfigExistingNetworkOutputReference</a>

---

##### `NewNetwork`<sup>Required</sup> <a name="NewNetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.newNetwork"></a>

```go
func NewNetwork() HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference">HypercomputeclusterClusterNetworkResourcesConfigNewNetworkOutputReference</a>

---

##### `ExistingNetworkInput`<sup>Optional</sup> <a name="ExistingNetworkInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.existingNetworkInput"></a>

```go
func ExistingNetworkInput() HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork">HypercomputeclusterClusterNetworkResourcesConfigExistingNetwork</a>

---

##### `NewNetworkInput`<sup>Optional</sup> <a name="NewNetworkInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.newNetworkInput"></a>

```go
func NewNetworkInput() HypercomputeclusterClusterNetworkResourcesConfigNewNetwork
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigNewNetwork">HypercomputeclusterClusterNetworkResourcesConfigNewNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterNetworkResourcesConfig
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig">HypercomputeclusterClusterNetworkResourcesConfig</a>

---


### HypercomputeclusterClusterNetworkResourcesList <a name="HypercomputeclusterClusterNetworkResourcesList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterNetworkResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterNetworkResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterNetworkResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterNetworkResourcesNetworkList <a name="HypercomputeclusterClusterNetworkResourcesNetworkList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterNetworkResourcesNetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterNetworkResourcesNetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterNetworkResourcesNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### HypercomputeclusterClusterNetworkResourcesNetworkOutputReference <a name="HypercomputeclusterClusterNetworkResourcesNetworkOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterNetworkResourcesNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterNetworkResourcesNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetwork">HypercomputeclusterClusterNetworkResourcesNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterNetworkResourcesNetwork
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetwork">HypercomputeclusterClusterNetworkResourcesNetwork</a>

---


### HypercomputeclusterClusterNetworkResourcesOutputReference <a name="HypercomputeclusterClusterNetworkResourcesOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterNetworkResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterNetworkResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.putConfig"></a>

```go
func PutConfig(value HypercomputeclusterClusterNetworkResourcesConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig">HypercomputeclusterClusterNetworkResourcesConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.resetConfig"></a>

```go
func ResetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference">HypercomputeclusterClusterNetworkResourcesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.network">Network</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList">HypercomputeclusterClusterNetworkResourcesNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig">HypercomputeclusterClusterNetworkResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.config"></a>

```go
func Config() HypercomputeclusterClusterNetworkResourcesConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfigOutputReference">HypercomputeclusterClusterNetworkResourcesConfigOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.network"></a>

```go
func Network() HypercomputeclusterClusterNetworkResourcesNetworkList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesNetworkList">HypercomputeclusterClusterNetworkResourcesNetworkList</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.configInput"></a>

```go
func ConfigInput() HypercomputeclusterClusterNetworkResourcesConfig
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesConfig">HypercomputeclusterClusterNetworkResourcesConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterNetworkResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterOrchestratorOutputReference <a name="HypercomputeclusterClusterOrchestratorOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterOrchestratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.putSlurm">PutSlurm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.resetSlurm">ResetSlurm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSlurm` <a name="PutSlurm" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.putSlurm"></a>

```go
func PutSlurm(value HypercomputeclusterClusterOrchestratorSlurm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.putSlurm.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm">HypercomputeclusterClusterOrchestratorSlurm</a>

---

##### `ResetSlurm` <a name="ResetSlurm" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.resetSlurm"></a>

```go
func ResetSlurm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.property.slurm">Slurm</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference">HypercomputeclusterClusterOrchestratorSlurmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.property.slurmInput">SlurmInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm">HypercomputeclusterClusterOrchestratorSlurm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator">HypercomputeclusterClusterOrchestrator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Slurm`<sup>Required</sup> <a name="Slurm" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.property.slurm"></a>

```go
func Slurm() HypercomputeclusterClusterOrchestratorSlurmOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference">HypercomputeclusterClusterOrchestratorSlurmOutputReference</a>

---

##### `SlurmInput`<sup>Optional</sup> <a name="SlurmInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.property.slurmInput"></a>

```go
func SlurmInput() HypercomputeclusterClusterOrchestratorSlurm
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm">HypercomputeclusterClusterOrchestratorSlurm</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterOrchestrator
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestrator">HypercomputeclusterClusterOrchestrator</a>

---


### HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference <a name="HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk">HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.sizeGb"></a>

```go
func SizeGb() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk">HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk</a>

---


### HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList <a name="HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference <a name="HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances">HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances">HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstances</a>

---


### HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference <a name="HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.putBootDisk">PutBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.putStorageConfigs">PutStorageConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetBootDisk">ResetBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetEnableOsLogin">ResetEnableOsLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetEnablePublicIps">ResetEnablePublicIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetStartupScript">ResetStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetStorageConfigs">ResetStorageConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBootDisk` <a name="PutBootDisk" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.putBootDisk"></a>

```go
func PutBootDisk(value HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk">HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk</a>

---

##### `PutStorageConfigs` <a name="PutStorageConfigs" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.putStorageConfigs"></a>

```go
func PutStorageConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.putStorageConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBootDisk` <a name="ResetBootDisk" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetBootDisk"></a>

```go
func ResetBootDisk()
```

##### `ResetEnableOsLogin` <a name="ResetEnableOsLogin" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetEnableOsLogin"></a>

```go
func ResetEnableOsLogin()
```

##### `ResetEnablePublicIps` <a name="ResetEnablePublicIps" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetEnablePublicIps"></a>

```go
func ResetEnablePublicIps()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetStartupScript` <a name="ResetStartupScript" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetStartupScript"></a>

```go
func ResetStartupScript()
```

##### `ResetStorageConfigs` <a name="ResetStorageConfigs" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.resetStorageConfigs"></a>

```go
func ResetStorageConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference">HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.instances">Instances</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList">HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.storageConfigs">StorageConfigs</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList">HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.bootDiskInput">BootDiskInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk">HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.countInput">CountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.enableOsLoginInput">EnableOsLoginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.enablePublicIpsInput">EnablePublicIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.startupScriptInput">StartupScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.storageConfigsInput">StorageConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.count">Count</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.enableOsLogin">EnableOsLogin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.enablePublicIps">EnablePublicIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.startupScript">StartupScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes">HypercomputeclusterClusterOrchestratorSlurmLoginNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootDisk`<sup>Required</sup> <a name="BootDisk" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.bootDisk"></a>

```go
func BootDisk() HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference">HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDiskOutputReference</a>

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.instances"></a>

```go
func Instances() HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList">HypercomputeclusterClusterOrchestratorSlurmLoginNodesInstancesList</a>

---

##### `StorageConfigs`<sup>Required</sup> <a name="StorageConfigs" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.storageConfigs"></a>

```go
func StorageConfigs() HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList">HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList</a>

---

##### `BootDiskInput`<sup>Optional</sup> <a name="BootDiskInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.bootDiskInput"></a>

```go
func BootDiskInput() HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk">HypercomputeclusterClusterOrchestratorSlurmLoginNodesBootDisk</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.countInput"></a>

```go
func CountInput() *string
```

- *Type:* *string

---

##### `EnableOsLoginInput`<sup>Optional</sup> <a name="EnableOsLoginInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.enableOsLoginInput"></a>

```go
func EnableOsLoginInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePublicIpsInput`<sup>Optional</sup> <a name="EnablePublicIpsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.enablePublicIpsInput"></a>

```go
func EnablePublicIpsInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `StartupScriptInput`<sup>Optional</sup> <a name="StartupScriptInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.startupScriptInput"></a>

```go
func StartupScriptInput() *string
```

- *Type:* *string

---

##### `StorageConfigsInput`<sup>Optional</sup> <a name="StorageConfigsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.storageConfigsInput"></a>

```go
func StorageConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.count"></a>

```go
func Count() *string
```

- *Type:* *string

---

##### `EnableOsLogin`<sup>Required</sup> <a name="EnableOsLogin" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.enableOsLogin"></a>

```go
func EnableOsLogin() interface{}
```

- *Type:* interface{}

---

##### `EnablePublicIps`<sup>Required</sup> <a name="EnablePublicIps" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.enablePublicIps"></a>

```go
func EnablePublicIps() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `StartupScript`<sup>Required</sup> <a name="StartupScript" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.startupScript"></a>

```go
func StartupScript() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterOrchestratorSlurmLoginNodes
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes">HypercomputeclusterClusterOrchestratorSlurmLoginNodes</a>

---


### HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList <a name="HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference <a name="HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.localMountInput">LocalMountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.localMount">LocalMount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalMountInput`<sup>Optional</sup> <a name="LocalMountInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.localMountInput"></a>

```go
func LocalMountInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalMount`<sup>Required</sup> <a name="LocalMount" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.localMount"></a>

```go
func LocalMount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesStorageConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference <a name="HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.sizeGb"></a>

```go
func SizeGb() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk</a>

---


### HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference <a name="HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.putBootDisk">PutBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.resetBootDisk">ResetBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.resetStartupScript">ResetStartupScript</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBootDisk` <a name="PutBootDisk" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.putBootDisk"></a>

```go
func PutBootDisk(value HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk</a>

---

##### `ResetBootDisk` <a name="ResetBootDisk" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.resetBootDisk"></a>

```go
func ResetBootDisk()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetStartupScript` <a name="ResetStartupScript" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.resetStartupScript"></a>

```go
func ResetStartupScript()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.bootDiskInput">BootDiskInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.startupScriptInput">StartupScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.startupScript">StartupScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootDisk`<sup>Required</sup> <a name="BootDisk" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.bootDisk"></a>

```go
func BootDisk() HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDiskOutputReference</a>

---

##### `BootDiskInput`<sup>Optional</sup> <a name="BootDiskInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.bootDiskInput"></a>

```go
func BootDiskInput() HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceBootDisk</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StartupScriptInput`<sup>Optional</sup> <a name="StartupScriptInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.startupScriptInput"></a>

```go
func StartupScriptInput() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StartupScript`<sup>Required</sup> <a name="StartupScript" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.startupScript"></a>

```go
func StartupScript() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance</a>

---


### HypercomputeclusterClusterOrchestratorSlurmNodeSetsList <a name="HypercomputeclusterClusterOrchestratorSlurmNodeSetsList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmNodeSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterOrchestratorSlurmNodeSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference <a name="HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.putComputeInstance">PutComputeInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.putStorageConfigs">PutStorageConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resetComputeId">ResetComputeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resetComputeInstance">ResetComputeInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resetMaxDynamicNodeCount">ResetMaxDynamicNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resetStaticNodeCount">ResetStaticNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resetStorageConfigs">ResetStorageConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComputeInstance` <a name="PutComputeInstance" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.putComputeInstance"></a>

```go
func PutComputeInstance(value HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.putComputeInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance</a>

---

##### `PutStorageConfigs` <a name="PutStorageConfigs" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.putStorageConfigs"></a>

```go
func PutStorageConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.putStorageConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComputeId` <a name="ResetComputeId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resetComputeId"></a>

```go
func ResetComputeId()
```

##### `ResetComputeInstance` <a name="ResetComputeInstance" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resetComputeInstance"></a>

```go
func ResetComputeInstance()
```

##### `ResetMaxDynamicNodeCount` <a name="ResetMaxDynamicNodeCount" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resetMaxDynamicNodeCount"></a>

```go
func ResetMaxDynamicNodeCount()
```

##### `ResetStaticNodeCount` <a name="ResetStaticNodeCount" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resetStaticNodeCount"></a>

```go
func ResetStaticNodeCount()
```

##### `ResetStorageConfigs` <a name="ResetStorageConfigs" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.resetStorageConfigs"></a>

```go
func ResetStorageConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.computeInstance">ComputeInstance</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.storageConfigs">StorageConfigs</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList">HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.computeIdInput">ComputeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.computeInstanceInput">ComputeInstanceInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.maxDynamicNodeCountInput">MaxDynamicNodeCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.staticNodeCountInput">StaticNodeCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.storageConfigsInput">StorageConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.computeId">ComputeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.maxDynamicNodeCount">MaxDynamicNodeCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.staticNodeCount">StaticNodeCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeInstance`<sup>Required</sup> <a name="ComputeInstance" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.computeInstance"></a>

```go
func ComputeInstance() HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstanceOutputReference</a>

---

##### `StorageConfigs`<sup>Required</sup> <a name="StorageConfigs" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.storageConfigs"></a>

```go
func StorageConfigs() HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList">HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList</a>

---

##### `ComputeIdInput`<sup>Optional</sup> <a name="ComputeIdInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.computeIdInput"></a>

```go
func ComputeIdInput() *string
```

- *Type:* *string

---

##### `ComputeInstanceInput`<sup>Optional</sup> <a name="ComputeInstanceInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.computeInstanceInput"></a>

```go
func ComputeInstanceInput() HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance">HypercomputeclusterClusterOrchestratorSlurmNodeSetsComputeInstance</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxDynamicNodeCountInput`<sup>Optional</sup> <a name="MaxDynamicNodeCountInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.maxDynamicNodeCountInput"></a>

```go
func MaxDynamicNodeCountInput() *string
```

- *Type:* *string

---

##### `StaticNodeCountInput`<sup>Optional</sup> <a name="StaticNodeCountInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.staticNodeCountInput"></a>

```go
func StaticNodeCountInput() *string
```

- *Type:* *string

---

##### `StorageConfigsInput`<sup>Optional</sup> <a name="StorageConfigsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.storageConfigsInput"></a>

```go
func StorageConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `ComputeId`<sup>Required</sup> <a name="ComputeId" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.computeId"></a>

```go
func ComputeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxDynamicNodeCount`<sup>Required</sup> <a name="MaxDynamicNodeCount" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.maxDynamicNodeCount"></a>

```go
func MaxDynamicNodeCount() *string
```

- *Type:* *string

---

##### `StaticNodeCount`<sup>Required</sup> <a name="StaticNodeCount" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.staticNodeCount"></a>

```go
func StaticNodeCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList <a name="HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference <a name="HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.localMountInput">LocalMountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.localMount">LocalMount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalMountInput`<sup>Optional</sup> <a name="LocalMountInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.localMountInput"></a>

```go
func LocalMountInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalMount`<sup>Required</sup> <a name="LocalMount" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.localMount"></a>

```go
func LocalMount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsStorageConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterOrchestratorSlurmOutputReference <a name="HypercomputeclusterClusterOrchestratorSlurmOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterOrchestratorSlurmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.putLoginNodes">PutLoginNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.putNodeSets">PutNodeSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.putPartitions">PutPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.resetDefaultPartition">ResetDefaultPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.resetEpilogBashScripts">ResetEpilogBashScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.resetPrologBashScripts">ResetPrologBashScripts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoginNodes` <a name="PutLoginNodes" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.putLoginNodes"></a>

```go
func PutLoginNodes(value HypercomputeclusterClusterOrchestratorSlurmLoginNodes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.putLoginNodes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes">HypercomputeclusterClusterOrchestratorSlurmLoginNodes</a>

---

##### `PutNodeSets` <a name="PutNodeSets" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.putNodeSets"></a>

```go
func PutNodeSets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.putNodeSets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPartitions` <a name="PutPartitions" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.putPartitions"></a>

```go
func PutPartitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.putPartitions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultPartition` <a name="ResetDefaultPartition" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.resetDefaultPartition"></a>

```go
func ResetDefaultPartition()
```

##### `ResetEpilogBashScripts` <a name="ResetEpilogBashScripts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.resetEpilogBashScripts"></a>

```go
func ResetEpilogBashScripts()
```

##### `ResetPrologBashScripts` <a name="ResetPrologBashScripts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.resetPrologBashScripts"></a>

```go
func ResetPrologBashScripts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.loginNodes">LoginNodes</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference">HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.nodeSets">NodeSets</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList">HypercomputeclusterClusterOrchestratorSlurmNodeSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.partitions">Partitions</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList">HypercomputeclusterClusterOrchestratorSlurmPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.defaultPartitionInput">DefaultPartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.epilogBashScriptsInput">EpilogBashScriptsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.loginNodesInput">LoginNodesInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes">HypercomputeclusterClusterOrchestratorSlurmLoginNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.nodeSetsInput">NodeSetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.partitionsInput">PartitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.prologBashScriptsInput">PrologBashScriptsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.defaultPartition">DefaultPartition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.epilogBashScripts">EpilogBashScripts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.prologBashScripts">PrologBashScripts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm">HypercomputeclusterClusterOrchestratorSlurm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoginNodes`<sup>Required</sup> <a name="LoginNodes" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.loginNodes"></a>

```go
func LoginNodes() HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference">HypercomputeclusterClusterOrchestratorSlurmLoginNodesOutputReference</a>

---

##### `NodeSets`<sup>Required</sup> <a name="NodeSets" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.nodeSets"></a>

```go
func NodeSets() HypercomputeclusterClusterOrchestratorSlurmNodeSetsList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmNodeSetsList">HypercomputeclusterClusterOrchestratorSlurmNodeSetsList</a>

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.partitions"></a>

```go
func Partitions() HypercomputeclusterClusterOrchestratorSlurmPartitionsList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList">HypercomputeclusterClusterOrchestratorSlurmPartitionsList</a>

---

##### `DefaultPartitionInput`<sup>Optional</sup> <a name="DefaultPartitionInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.defaultPartitionInput"></a>

```go
func DefaultPartitionInput() *string
```

- *Type:* *string

---

##### `EpilogBashScriptsInput`<sup>Optional</sup> <a name="EpilogBashScriptsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.epilogBashScriptsInput"></a>

```go
func EpilogBashScriptsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoginNodesInput`<sup>Optional</sup> <a name="LoginNodesInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.loginNodesInput"></a>

```go
func LoginNodesInput() HypercomputeclusterClusterOrchestratorSlurmLoginNodes
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmLoginNodes">HypercomputeclusterClusterOrchestratorSlurmLoginNodes</a>

---

##### `NodeSetsInput`<sup>Optional</sup> <a name="NodeSetsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.nodeSetsInput"></a>

```go
func NodeSetsInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionsInput`<sup>Optional</sup> <a name="PartitionsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.partitionsInput"></a>

```go
func PartitionsInput() interface{}
```

- *Type:* interface{}

---

##### `PrologBashScriptsInput`<sup>Optional</sup> <a name="PrologBashScriptsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.prologBashScriptsInput"></a>

```go
func PrologBashScriptsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultPartition`<sup>Required</sup> <a name="DefaultPartition" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.defaultPartition"></a>

```go
func DefaultPartition() *string
```

- *Type:* *string

---

##### `EpilogBashScripts`<sup>Required</sup> <a name="EpilogBashScripts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.epilogBashScripts"></a>

```go
func EpilogBashScripts() *[]*string
```

- *Type:* *[]*string

---

##### `PrologBashScripts`<sup>Required</sup> <a name="PrologBashScripts" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.prologBashScripts"></a>

```go
func PrologBashScripts() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterOrchestratorSlurm
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurm">HypercomputeclusterClusterOrchestratorSlurm</a>

---


### HypercomputeclusterClusterOrchestratorSlurmPartitionsList <a name="HypercomputeclusterClusterOrchestratorSlurmPartitionsList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmPartitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterOrchestratorSlurmPartitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference <a name="HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.nodeSetIdsInput">NodeSetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.nodeSetIds">NodeSetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NodeSetIdsInput`<sup>Optional</sup> <a name="NodeSetIdsInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.nodeSetIdsInput"></a>

```go
func NodeSetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NodeSetIds`<sup>Required</sup> <a name="NodeSetIds" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.nodeSetIds"></a>

```go
func NodeSetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterOrchestratorSlurmPartitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterStorageResourcesBucketList <a name="HypercomputeclusterClusterStorageResourcesBucketList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesBucketList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterStorageResourcesBucketList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterStorageResourcesBucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### HypercomputeclusterClusterStorageResourcesBucketOutputReference <a name="HypercomputeclusterClusterStorageResourcesBucketOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesBucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterStorageResourcesBucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucket">HypercomputeclusterClusterStorageResourcesBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesBucket
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucket">HypercomputeclusterClusterStorageResourcesBucket</a>

---


### HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference <a name="HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket">HypercomputeclusterClusterStorageResourcesConfigExistingBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesConfigExistingBucket
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket">HypercomputeclusterClusterStorageResourcesConfigExistingBucket</a>

---


### HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference <a name="HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.property.filestoreInput">FilestoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.property.filestore">Filestore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore">HypercomputeclusterClusterStorageResourcesConfigExistingFilestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilestoreInput`<sup>Optional</sup> <a name="FilestoreInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.property.filestoreInput"></a>

```go
func FilestoreInput() *string
```

- *Type:* *string

---

##### `Filestore`<sup>Required</sup> <a name="Filestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.property.filestore"></a>

```go
func Filestore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesConfigExistingFilestore
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore">HypercomputeclusterClusterStorageResourcesConfigExistingFilestore</a>

---


### HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference <a name="HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.property.lustreInput">LustreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.property.lustre">Lustre</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre">HypercomputeclusterClusterStorageResourcesConfigExistingLustre</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LustreInput`<sup>Optional</sup> <a name="LustreInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.property.lustreInput"></a>

```go
func LustreInput() *string
```

- *Type:* *string

---

##### `Lustre`<sup>Required</sup> <a name="Lustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.property.lustre"></a>

```go
func Lustre() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesConfigExistingLustre
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre">HypercomputeclusterClusterStorageResourcesConfigExistingLustre</a>

---


### HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference <a name="HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.resetTerminalStorageClass">ResetTerminalStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTerminalStorageClass` <a name="ResetTerminalStorageClass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.resetTerminalStorageClass"></a>

```go
func ResetTerminalStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.terminalStorageClassInput">TerminalStorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.terminalStorageClass">TerminalStorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass">HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TerminalStorageClassInput`<sup>Optional</sup> <a name="TerminalStorageClassInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.terminalStorageClassInput"></a>

```go
func TerminalStorageClassInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `TerminalStorageClass`<sup>Required</sup> <a name="TerminalStorageClass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.terminalStorageClass"></a>

```go
func TerminalStorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass">HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass</a>

---


### HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference <a name="HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace">HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace">HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace</a>

---


### HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference <a name="HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.putAutoclass">PutAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.putHierarchicalNamespace">PutHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.resetAutoclass">ResetAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.resetHierarchicalNamespace">ResetHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoclass` <a name="PutAutoclass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.putAutoclass"></a>

```go
func PutAutoclass(value HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.putAutoclass.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass">HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass</a>

---

##### `PutHierarchicalNamespace` <a name="PutHierarchicalNamespace" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.putHierarchicalNamespace"></a>

```go
func PutHierarchicalNamespace(value HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.putHierarchicalNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace">HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace</a>

---

##### `ResetAutoclass` <a name="ResetAutoclass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.resetAutoclass"></a>

```go
func ResetAutoclass()
```

##### `ResetHierarchicalNamespace` <a name="ResetHierarchicalNamespace" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.resetHierarchicalNamespace"></a>

```go
func ResetHierarchicalNamespace()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.resetStorageClass"></a>

```go
func ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.autoclass">Autoclass</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference">HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.hierarchicalNamespace">HierarchicalNamespace</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference">HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.autoclassInput">AutoclassInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass">HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.hierarchicalNamespaceInput">HierarchicalNamespaceInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace">HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket">HypercomputeclusterClusterStorageResourcesConfigNewBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autoclass`<sup>Required</sup> <a name="Autoclass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.autoclass"></a>

```go
func Autoclass() HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference">HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclassOutputReference</a>

---

##### `HierarchicalNamespace`<sup>Required</sup> <a name="HierarchicalNamespace" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.hierarchicalNamespace"></a>

```go
func HierarchicalNamespace() HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference">HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespaceOutputReference</a>

---

##### `AutoclassInput`<sup>Optional</sup> <a name="AutoclassInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.autoclassInput"></a>

```go
func AutoclassInput() HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass">HypercomputeclusterClusterStorageResourcesConfigNewBucketAutoclass</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `HierarchicalNamespaceInput`<sup>Optional</sup> <a name="HierarchicalNamespaceInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.hierarchicalNamespaceInput"></a>

```go
func HierarchicalNamespaceInput() HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace">HypercomputeclusterClusterStorageResourcesConfigNewBucketHierarchicalNamespace</a>

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesConfigNewBucket
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket">HypercomputeclusterClusterStorageResourcesConfigNewBucket</a>

---


### HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList <a name="HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference <a name="HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.capacityGbInput">CapacityGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.fileShareInput">FileShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.capacityGb">CapacityGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.fileShare">FileShare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityGbInput`<sup>Optional</sup> <a name="CapacityGbInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.capacityGbInput"></a>

```go
func CapacityGbInput() *string
```

- *Type:* *string

---

##### `FileShareInput`<sup>Optional</sup> <a name="FileShareInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.fileShareInput"></a>

```go
func FileShareInput() *string
```

- *Type:* *string

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.capacityGb"></a>

```go
func CapacityGb() *string
```

- *Type:* *string

---

##### `FileShare`<sup>Required</sup> <a name="FileShare" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.fileShare"></a>

```go
func FileShare() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference <a name="HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.putFileShares">PutFileShares</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileShares` <a name="PutFileShares" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.putFileShares"></a>

```go
func PutFileShares(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.putFileShares.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.fileShares">FileShares</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList">HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.fileSharesInput">FileSharesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.filestoreInput">FilestoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.filestore">Filestore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore">HypercomputeclusterClusterStorageResourcesConfigNewFilestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileShares`<sup>Required</sup> <a name="FileShares" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.fileShares"></a>

```go
func FileShares() HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList">HypercomputeclusterClusterStorageResourcesConfigNewFilestoreFileSharesList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FileSharesInput`<sup>Optional</sup> <a name="FileSharesInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.fileSharesInput"></a>

```go
func FileSharesInput() interface{}
```

- *Type:* interface{}

---

##### `FilestoreInput`<sup>Optional</sup> <a name="FilestoreInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.filestoreInput"></a>

```go
func FilestoreInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filestore`<sup>Required</sup> <a name="Filestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.filestore"></a>

```go
func Filestore() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesConfigNewFilestore
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore">HypercomputeclusterClusterStorageResourcesConfigNewFilestore</a>

---


### HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference <a name="HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.resetPerUnitStorageThroughput">ResetPerUnitStorageThroughput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetPerUnitStorageThroughput` <a name="ResetPerUnitStorageThroughput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.resetPerUnitStorageThroughput"></a>

```go
func ResetPerUnitStorageThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.capacityGbInput">CapacityGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.filesystemInput">FilesystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.lustreInput">LustreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.perUnitStorageThroughputInput">PerUnitStorageThroughputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.capacityGb">CapacityGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.filesystem">Filesystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.lustre">Lustre</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre">HypercomputeclusterClusterStorageResourcesConfigNewLustre</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityGbInput`<sup>Optional</sup> <a name="CapacityGbInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.capacityGbInput"></a>

```go
func CapacityGbInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FilesystemInput`<sup>Optional</sup> <a name="FilesystemInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.filesystemInput"></a>

```go
func FilesystemInput() *string
```

- *Type:* *string

---

##### `LustreInput`<sup>Optional</sup> <a name="LustreInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.lustreInput"></a>

```go
func LustreInput() *string
```

- *Type:* *string

---

##### `PerUnitStorageThroughputInput`<sup>Optional</sup> <a name="PerUnitStorageThroughputInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.perUnitStorageThroughputInput"></a>

```go
func PerUnitStorageThroughputInput() *string
```

- *Type:* *string

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.capacityGb"></a>

```go
func CapacityGb() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.filesystem"></a>

```go
func Filesystem() *string
```

- *Type:* *string

---

##### `Lustre`<sup>Required</sup> <a name="Lustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.lustre"></a>

```go
func Lustre() *string
```

- *Type:* *string

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.perUnitStorageThroughput"></a>

```go
func PerUnitStorageThroughput() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesConfigNewLustre
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre">HypercomputeclusterClusterStorageResourcesConfigNewLustre</a>

---


### HypercomputeclusterClusterStorageResourcesConfigOutputReference <a name="HypercomputeclusterClusterStorageResourcesConfigOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterStorageResourcesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putExistingBucket">PutExistingBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putExistingFilestore">PutExistingFilestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putExistingLustre">PutExistingLustre</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putNewBucket">PutNewBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putNewFilestore">PutNewFilestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putNewLustre">PutNewLustre</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetExistingBucket">ResetExistingBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetExistingFilestore">ResetExistingFilestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetExistingLustre">ResetExistingLustre</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetNewBucket">ResetNewBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetNewFilestore">ResetNewFilestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetNewLustre">ResetNewLustre</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExistingBucket` <a name="PutExistingBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putExistingBucket"></a>

```go
func PutExistingBucket(value HypercomputeclusterClusterStorageResourcesConfigExistingBucket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putExistingBucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket">HypercomputeclusterClusterStorageResourcesConfigExistingBucket</a>

---

##### `PutExistingFilestore` <a name="PutExistingFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putExistingFilestore"></a>

```go
func PutExistingFilestore(value HypercomputeclusterClusterStorageResourcesConfigExistingFilestore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putExistingFilestore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore">HypercomputeclusterClusterStorageResourcesConfigExistingFilestore</a>

---

##### `PutExistingLustre` <a name="PutExistingLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putExistingLustre"></a>

```go
func PutExistingLustre(value HypercomputeclusterClusterStorageResourcesConfigExistingLustre)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putExistingLustre.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre">HypercomputeclusterClusterStorageResourcesConfigExistingLustre</a>

---

##### `PutNewBucket` <a name="PutNewBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putNewBucket"></a>

```go
func PutNewBucket(value HypercomputeclusterClusterStorageResourcesConfigNewBucket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putNewBucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket">HypercomputeclusterClusterStorageResourcesConfigNewBucket</a>

---

##### `PutNewFilestore` <a name="PutNewFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putNewFilestore"></a>

```go
func PutNewFilestore(value HypercomputeclusterClusterStorageResourcesConfigNewFilestore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putNewFilestore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore">HypercomputeclusterClusterStorageResourcesConfigNewFilestore</a>

---

##### `PutNewLustre` <a name="PutNewLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putNewLustre"></a>

```go
func PutNewLustre(value HypercomputeclusterClusterStorageResourcesConfigNewLustre)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.putNewLustre.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre">HypercomputeclusterClusterStorageResourcesConfigNewLustre</a>

---

##### `ResetExistingBucket` <a name="ResetExistingBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetExistingBucket"></a>

```go
func ResetExistingBucket()
```

##### `ResetExistingFilestore` <a name="ResetExistingFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetExistingFilestore"></a>

```go
func ResetExistingFilestore()
```

##### `ResetExistingLustre` <a name="ResetExistingLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetExistingLustre"></a>

```go
func ResetExistingLustre()
```

##### `ResetNewBucket` <a name="ResetNewBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetNewBucket"></a>

```go
func ResetNewBucket()
```

##### `ResetNewFilestore` <a name="ResetNewFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetNewFilestore"></a>

```go
func ResetNewFilestore()
```

##### `ResetNewLustre` <a name="ResetNewLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.resetNewLustre"></a>

```go
func ResetNewLustre()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingBucket">ExistingBucket</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference">HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingFilestore">ExistingFilestore</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference">HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingLustre">ExistingLustre</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference">HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newBucket">NewBucket</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference">HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newFilestore">NewFilestore</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference">HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newLustre">NewLustre</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference">HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingBucketInput">ExistingBucketInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket">HypercomputeclusterClusterStorageResourcesConfigExistingBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingFilestoreInput">ExistingFilestoreInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore">HypercomputeclusterClusterStorageResourcesConfigExistingFilestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingLustreInput">ExistingLustreInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre">HypercomputeclusterClusterStorageResourcesConfigExistingLustre</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newBucketInput">NewBucketInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket">HypercomputeclusterClusterStorageResourcesConfigNewBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newFilestoreInput">NewFilestoreInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore">HypercomputeclusterClusterStorageResourcesConfigNewFilestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newLustreInput">NewLustreInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre">HypercomputeclusterClusterStorageResourcesConfigNewLustre</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig">HypercomputeclusterClusterStorageResourcesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExistingBucket`<sup>Required</sup> <a name="ExistingBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingBucket"></a>

```go
func ExistingBucket() HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference">HypercomputeclusterClusterStorageResourcesConfigExistingBucketOutputReference</a>

---

##### `ExistingFilestore`<sup>Required</sup> <a name="ExistingFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingFilestore"></a>

```go
func ExistingFilestore() HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference">HypercomputeclusterClusterStorageResourcesConfigExistingFilestoreOutputReference</a>

---

##### `ExistingLustre`<sup>Required</sup> <a name="ExistingLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingLustre"></a>

```go
func ExistingLustre() HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference">HypercomputeclusterClusterStorageResourcesConfigExistingLustreOutputReference</a>

---

##### `NewBucket`<sup>Required</sup> <a name="NewBucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newBucket"></a>

```go
func NewBucket() HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference">HypercomputeclusterClusterStorageResourcesConfigNewBucketOutputReference</a>

---

##### `NewFilestore`<sup>Required</sup> <a name="NewFilestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newFilestore"></a>

```go
func NewFilestore() HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference">HypercomputeclusterClusterStorageResourcesConfigNewFilestoreOutputReference</a>

---

##### `NewLustre`<sup>Required</sup> <a name="NewLustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newLustre"></a>

```go
func NewLustre() HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference">HypercomputeclusterClusterStorageResourcesConfigNewLustreOutputReference</a>

---

##### `ExistingBucketInput`<sup>Optional</sup> <a name="ExistingBucketInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingBucketInput"></a>

```go
func ExistingBucketInput() HypercomputeclusterClusterStorageResourcesConfigExistingBucket
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingBucket">HypercomputeclusterClusterStorageResourcesConfigExistingBucket</a>

---

##### `ExistingFilestoreInput`<sup>Optional</sup> <a name="ExistingFilestoreInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingFilestoreInput"></a>

```go
func ExistingFilestoreInput() HypercomputeclusterClusterStorageResourcesConfigExistingFilestore
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingFilestore">HypercomputeclusterClusterStorageResourcesConfigExistingFilestore</a>

---

##### `ExistingLustreInput`<sup>Optional</sup> <a name="ExistingLustreInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.existingLustreInput"></a>

```go
func ExistingLustreInput() HypercomputeclusterClusterStorageResourcesConfigExistingLustre
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigExistingLustre">HypercomputeclusterClusterStorageResourcesConfigExistingLustre</a>

---

##### `NewBucketInput`<sup>Optional</sup> <a name="NewBucketInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newBucketInput"></a>

```go
func NewBucketInput() HypercomputeclusterClusterStorageResourcesConfigNewBucket
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewBucket">HypercomputeclusterClusterStorageResourcesConfigNewBucket</a>

---

##### `NewFilestoreInput`<sup>Optional</sup> <a name="NewFilestoreInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newFilestoreInput"></a>

```go
func NewFilestoreInput() HypercomputeclusterClusterStorageResourcesConfigNewFilestore
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewFilestore">HypercomputeclusterClusterStorageResourcesConfigNewFilestore</a>

---

##### `NewLustreInput`<sup>Optional</sup> <a name="NewLustreInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.newLustreInput"></a>

```go
func NewLustreInput() HypercomputeclusterClusterStorageResourcesConfigNewLustre
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigNewLustre">HypercomputeclusterClusterStorageResourcesConfigNewLustre</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesConfig
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig">HypercomputeclusterClusterStorageResourcesConfig</a>

---


### HypercomputeclusterClusterStorageResourcesFilestoreList <a name="HypercomputeclusterClusterStorageResourcesFilestoreList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesFilestoreList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterStorageResourcesFilestoreList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterStorageResourcesFilestoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### HypercomputeclusterClusterStorageResourcesFilestoreOutputReference <a name="HypercomputeclusterClusterStorageResourcesFilestoreOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesFilestoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterStorageResourcesFilestoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.property.filestore">Filestore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestore">HypercomputeclusterClusterStorageResourcesFilestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filestore`<sup>Required</sup> <a name="Filestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.property.filestore"></a>

```go
func Filestore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesFilestore
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestore">HypercomputeclusterClusterStorageResourcesFilestore</a>

---


### HypercomputeclusterClusterStorageResourcesList <a name="HypercomputeclusterClusterStorageResourcesList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterStorageResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterStorageResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterStorageResourcesLustreList <a name="HypercomputeclusterClusterStorageResourcesLustreList" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesLustreList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HypercomputeclusterClusterStorageResourcesLustreList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.get"></a>

```go
func Get(index *f64) HypercomputeclusterClusterStorageResourcesLustreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### HypercomputeclusterClusterStorageResourcesLustreOutputReference <a name="HypercomputeclusterClusterStorageResourcesLustreOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesLustreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterStorageResourcesLustreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.property.lustre">Lustre</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustre">HypercomputeclusterClusterStorageResourcesLustre</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lustre`<sup>Required</sup> <a name="Lustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.property.lustre"></a>

```go
func Lustre() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreOutputReference.property.internalValue"></a>

```go
func InternalValue() HypercomputeclusterClusterStorageResourcesLustre
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustre">HypercomputeclusterClusterStorageResourcesLustre</a>

---


### HypercomputeclusterClusterStorageResourcesOutputReference <a name="HypercomputeclusterClusterStorageResourcesOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterStorageResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HypercomputeclusterClusterStorageResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.putConfig">PutConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.putConfig"></a>

```go
func PutConfig(value HypercomputeclusterClusterStorageResourcesConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig">HypercomputeclusterClusterStorageResourcesConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.bucket">Bucket</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList">HypercomputeclusterClusterStorageResourcesBucketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference">HypercomputeclusterClusterStorageResourcesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.filestore">Filestore</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList">HypercomputeclusterClusterStorageResourcesFilestoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.lustre">Lustre</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList">HypercomputeclusterClusterStorageResourcesLustreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig">HypercomputeclusterClusterStorageResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.bucket"></a>

```go
func Bucket() HypercomputeclusterClusterStorageResourcesBucketList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesBucketList">HypercomputeclusterClusterStorageResourcesBucketList</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.config"></a>

```go
func Config() HypercomputeclusterClusterStorageResourcesConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfigOutputReference">HypercomputeclusterClusterStorageResourcesConfigOutputReference</a>

---

##### `Filestore`<sup>Required</sup> <a name="Filestore" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.filestore"></a>

```go
func Filestore() HypercomputeclusterClusterStorageResourcesFilestoreList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesFilestoreList">HypercomputeclusterClusterStorageResourcesFilestoreList</a>

---

##### `Lustre`<sup>Required</sup> <a name="Lustre" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.lustre"></a>

```go
func Lustre() HypercomputeclusterClusterStorageResourcesLustreList
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesLustreList">HypercomputeclusterClusterStorageResourcesLustreList</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.configInput"></a>

```go
func ConfigInput() HypercomputeclusterClusterStorageResourcesConfig
```

- *Type:* <a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesConfig">HypercomputeclusterClusterStorageResourcesConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterStorageResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HypercomputeclusterClusterTimeoutsOutputReference <a name="HypercomputeclusterClusterTimeoutsOutputReference" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/hypercomputeclustercluster"

hypercomputeclustercluster.NewHypercomputeclusterClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HypercomputeclusterClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.hypercomputeclusterCluster.HypercomputeclusterClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



