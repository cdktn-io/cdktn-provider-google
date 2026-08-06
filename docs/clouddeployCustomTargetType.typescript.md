# `clouddeployCustomTargetType` Submodule <a name="`clouddeployCustomTargetType` Submodule" id="@cdktn/provider-google.clouddeployCustomTargetType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployCustomTargetType <a name="ClouddeployCustomTargetType" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type google_clouddeploy_custom_target_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetType(scope: Construct, id: string, config: ClouddeployCustomTargetTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig">ClouddeployCustomTargetTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig">ClouddeployCustomTargetTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putCustomActions">putCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTasks">putTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetCustomActions">resetCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetTasks">resetTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomActions` <a name="putCustomActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putCustomActions"></a>

```typescript
public putCustomActions(value: ClouddeployCustomTargetTypeCustomActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putCustomActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a>

---

##### `putTasks` <a name="putTasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTasks"></a>

```typescript
public putTasks(value: ClouddeployCustomTargetTypeTasks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTasks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTimeouts"></a>

```typescript
public putTimeouts(value: ClouddeployCustomTargetTypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCustomActions` <a name="resetCustomActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetCustomActions"></a>

```typescript
public resetCustomActions(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTasks` <a name="resetTasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetTasks"></a>

```typescript
public resetTasks(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ClouddeployCustomTargetType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isConstruct"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

clouddeployCustomTargetType.ClouddeployCustomTargetType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformElement"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformResource"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ClouddeployCustomTargetType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddeployCustomTargetType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddeployCustomTargetType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ClouddeployCustomTargetType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customActions">customActions</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference">ClouddeployCustomTargetTypeCustomActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customTargetTypeId">customTargetTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tasks">tasks</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference">ClouddeployCustomTargetTypeTasksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference">ClouddeployCustomTargetTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customActionsInput">customActionsInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tasksInput">tasksInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customActions`<sup>Required</sup> <a name="customActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customActions"></a>

```typescript
public readonly customActions: ClouddeployCustomTargetTypeCustomActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference">ClouddeployCustomTargetTypeCustomActionsOutputReference</a>

---

##### `customTargetTypeId`<sup>Required</sup> <a name="customTargetTypeId" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customTargetTypeId"></a>

```typescript
public readonly customTargetTypeId: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tasks"></a>

```typescript
public readonly tasks: ClouddeployCustomTargetTypeTasksOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference">ClouddeployCustomTargetTypeTasksOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.timeouts"></a>

```typescript
public readonly timeouts: ClouddeployCustomTargetTypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference">ClouddeployCustomTargetTypeTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customActionsInput`<sup>Optional</sup> <a name="customActionsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.customActionsInput"></a>

```typescript
public readonly customActionsInput: ClouddeployCustomTargetTypeCustomActions;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tasksInput`<sup>Optional</sup> <a name="tasksInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tasksInput"></a>

```typescript
public readonly tasksInput: ClouddeployCustomTargetTypeTasks;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ClouddeployCustomTargetTypeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployCustomTargetTypeConfig <a name="ClouddeployCustomTargetTypeConfig" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeConfig: clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.location">location</a></code> | <code>string</code> | The location of the source. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.name">name</a></code> | <code>string</code> | Name of the 'CustomTargetType'. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User annotations. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.customActions">customActions</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a></code> | custom_actions block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.description">description</a></code> | <code>string</code> | Description of the 'CustomTargetType'. Max length is 255 characters. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#id ClouddeployCustomTargetType#id}. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels are attributes that can be set and used by both the user and by Cloud Deploy. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#project ClouddeployCustomTargetType#project}. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.tasks">tasks</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a></code> | tasks block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#location ClouddeployCustomTargetType#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the 'CustomTargetType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#name ClouddeployCustomTargetType#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User annotations.

These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#annotations ClouddeployCustomTargetType#annotations}

---

##### `customActions`<sup>Optional</sup> <a name="customActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.customActions"></a>

```typescript
public readonly customActions: ClouddeployCustomTargetTypeCustomActions;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a>

custom_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#custom_actions ClouddeployCustomTargetType#custom_actions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#deletion_policy ClouddeployCustomTargetType#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the 'CustomTargetType'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#description ClouddeployCustomTargetType#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#id ClouddeployCustomTargetType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels are attributes that can be set and used by both the user and by Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#labels ClouddeployCustomTargetType#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#project ClouddeployCustomTargetType#project}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.tasks"></a>

```typescript
public readonly tasks: ClouddeployCustomTargetTypeTasks;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#tasks ClouddeployCustomTargetType#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ClouddeployCustomTargetTypeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#timeouts ClouddeployCustomTargetType#timeouts}

---

### ClouddeployCustomTargetTypeCustomActions <a name="ClouddeployCustomTargetTypeCustomActions" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeCustomActions: clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.deployAction">deployAction</a></code> | <code>string</code> | The Skaffold custom action responsible for deploy operations. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.includeSkaffoldModules">includeSkaffoldModules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]</code> | include_skaffold_modules block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.renderAction">renderAction</a></code> | <code>string</code> | The Skaffold custom action responsible for render operations. |

---

##### `deployAction`<sup>Required</sup> <a name="deployAction" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.deployAction"></a>

```typescript
public readonly deployAction: string;
```

- *Type:* string

The Skaffold custom action responsible for deploy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#deploy_action ClouddeployCustomTargetType#deploy_action}

---

##### `includeSkaffoldModules`<sup>Optional</sup> <a name="includeSkaffoldModules" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.includeSkaffoldModules"></a>

```typescript
public readonly includeSkaffoldModules: IResolvable | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]

include_skaffold_modules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#include_skaffold_modules ClouddeployCustomTargetType#include_skaffold_modules}

---

##### `renderAction`<sup>Optional</sup> <a name="renderAction" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions.property.renderAction"></a>

```typescript
public readonly renderAction: string;
```

- *Type:* string

The Skaffold custom action responsible for render operations.

If not provided then Cloud Deploy will perform the render operations via 'skaffold render'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#render_action ClouddeployCustomTargetType#render_action}

---

### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules: clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.configs">configs</a></code> | <code>string[]</code> | The Skaffold Config modules to use from the specified source. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.git">git</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | git block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudBuildRepo">googleCloudBuildRepo</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | google_cloud_build_repo block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudStorage">googleCloudStorage</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | google_cloud_storage block. |

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.configs"></a>

```typescript
public readonly configs: string[];
```

- *Type:* string[]

The Skaffold Config modules to use from the specified source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#configs ClouddeployCustomTargetType#configs}

---

##### `git`<sup>Optional</sup> <a name="git" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.git"></a>

```typescript
public readonly git: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#git ClouddeployCustomTargetType#git}

---

##### `googleCloudBuildRepo`<sup>Optional</sup> <a name="googleCloudBuildRepo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudBuildRepo"></a>

```typescript
public readonly googleCloudBuildRepo: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

google_cloud_build_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#google_cloud_build_repo ClouddeployCustomTargetType#google_cloud_build_repo}

---

##### `googleCloudStorage`<sup>Optional</sup> <a name="googleCloudStorage" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudStorage"></a>

```typescript
public readonly googleCloudStorage: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

google_cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#google_cloud_storage ClouddeployCustomTargetType#google_cloud_storage}

---

### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit: clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.repo">repo</a></code> | <code>string</code> | Git repository the package should be cloned from. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.path">path</a></code> | <code>string</code> | Relative path from the repository root to the Skaffold file. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.ref">ref</a></code> | <code>string</code> | Git ref the package should be cloned from. |

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Git repository the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#repo ClouddeployCustomTargetType#repo}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#path ClouddeployCustomTargetType#path}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Git ref the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#ref ClouddeployCustomTargetType#ref}

---

### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo: clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.repository">repository</a></code> | <code>string</code> | Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.path">path</a></code> | <code>string</code> | Relative path from the repository root to the Skaffold file. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.ref">ref</a></code> | <code>string</code> | Branch or tag to use when cloning the repository. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#repository ClouddeployCustomTargetType#repository}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#path ClouddeployCustomTargetType#path}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Branch or tag to use when cloning the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#ref ClouddeployCustomTargetType#ref}

---

### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage: clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.source">source</a></code> | <code>string</code> | Cloud Storage source paths to copy recursively. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.path">path</a></code> | <code>string</code> | Relative path from the source to the Skaffold file. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Cloud Storage source paths to copy recursively.

For example, providing 'gs://my-bucket/dir/configs/*' will result in Skaffold copying all files within the 'dir/configs' directory in the bucket 'my-bucket'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#source ClouddeployCustomTargetType#source}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Relative path from the source to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#path ClouddeployCustomTargetType#path}

---

### ClouddeployCustomTargetTypeTasks <a name="ClouddeployCustomTargetTypeTasks" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeTasks: clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks.property.deploy">deploy</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a></code> | deploy block. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks.property.render">render</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a></code> | render block. |

---

##### `deploy`<sup>Required</sup> <a name="deploy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks.property.deploy"></a>

```typescript
public readonly deploy: ClouddeployCustomTargetTypeTasksDeploy;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a>

deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#deploy ClouddeployCustomTargetType#deploy}

---

##### `render`<sup>Optional</sup> <a name="render" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks.property.render"></a>

```typescript
public readonly render: ClouddeployCustomTargetTypeTasksRender;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a>

render block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#render ClouddeployCustomTargetType#render}

---

### ClouddeployCustomTargetTypeTasksDeploy <a name="ClouddeployCustomTargetTypeTasksDeploy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeTasksDeploy: clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a></code> | container block. |

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy.property.container"></a>

```typescript
public readonly container: ClouddeployCustomTargetTypeTasksDeployContainer;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#container ClouddeployCustomTargetType#container}

---

### ClouddeployCustomTargetTypeTasksDeployContainer <a name="ClouddeployCustomTargetTypeTasksDeployContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeTasksDeployContainer: clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.image">image</a></code> | <code>string</code> | Image is the container image to use. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.args">args</a></code> | <code>string[]</code> | Args is the container arguments to use. This overrides the default arguments defined in the container image. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.command">command</a></code> | <code>string[]</code> | Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Environment variables that are set in the container. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Image is the container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#image ClouddeployCustomTargetType#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Args is the container arguments to use. This overrides the default arguments defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#args ClouddeployCustomTargetType#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#command ClouddeployCustomTargetType#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables that are set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#env ClouddeployCustomTargetType#env}

---

### ClouddeployCustomTargetTypeTasksRender <a name="ClouddeployCustomTargetTypeTasksRender" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeTasksRender: clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a></code> | container block. |

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender.property.container"></a>

```typescript
public readonly container: ClouddeployCustomTargetTypeTasksRenderContainer;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#container ClouddeployCustomTargetType#container}

---

### ClouddeployCustomTargetTypeTasksRenderContainer <a name="ClouddeployCustomTargetTypeTasksRenderContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeTasksRenderContainer: clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.image">image</a></code> | <code>string</code> | Image is the container image to use. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.args">args</a></code> | <code>string[]</code> | Args is the container arguments to use. This overrides the default arguments defined in the container image. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.command">command</a></code> | <code>string[]</code> | Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Environment variables that are set in the container. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Image is the container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#image ClouddeployCustomTargetType#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Args is the container arguments to use. This overrides the default arguments defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#args ClouddeployCustomTargetType#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#command ClouddeployCustomTargetType#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables that are set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#env ClouddeployCustomTargetType#env}

---

### ClouddeployCustomTargetTypeTimeouts <a name="ClouddeployCustomTargetTypeTimeouts" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

const clouddeployCustomTargetTypeTimeouts: clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#create ClouddeployCustomTargetType#create}. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#delete ClouddeployCustomTargetType#delete}. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#update ClouddeployCustomTargetType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#create ClouddeployCustomTargetType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#delete ClouddeployCustomTargetType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/clouddeploy_custom_target_type#update ClouddeployCustomTargetType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetRef">resetRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---


### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetRef">resetRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---


### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---


### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get"></a>

```typescript
public get(index: number): ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]

---


### ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference <a name="ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit">putGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo">putGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage">putGoogleCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetConfigs">resetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGit">resetGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudBuildRepo">resetGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudStorage">resetGoogleCloudStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGit` <a name="putGit" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit"></a>

```typescript
public putGit(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---

##### `putGoogleCloudBuildRepo` <a name="putGoogleCloudBuildRepo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo"></a>

```typescript
public putGoogleCloudBuildRepo(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---

##### `putGoogleCloudStorage` <a name="putGoogleCloudStorage" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage"></a>

```typescript
public putGoogleCloudStorage(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---

##### `resetConfigs` <a name="resetConfigs" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetConfigs"></a>

```typescript
public resetConfigs(): void
```

##### `resetGit` <a name="resetGit" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGit"></a>

```typescript
public resetGit(): void
```

##### `resetGoogleCloudBuildRepo` <a name="resetGoogleCloudBuildRepo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudBuildRepo"></a>

```typescript
public resetGoogleCloudBuildRepo(): void
```

##### `resetGoogleCloudStorage` <a name="resetGoogleCloudStorage" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudStorage"></a>

```typescript
public resetGoogleCloudStorage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.git">git</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepo">googleCloudBuildRepo</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorage">googleCloudStorage</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configsInput">configsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.gitInput">gitInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepoInput">googleCloudBuildRepoInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorageInput">googleCloudStorageInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configs">configs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `git`<sup>Required</sup> <a name="git" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.git"></a>

```typescript
public readonly git: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference</a>

---

##### `googleCloudBuildRepo`<sup>Required</sup> <a name="googleCloudBuildRepo" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepo"></a>

```typescript
public readonly googleCloudBuildRepo: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference</a>

---

##### `googleCloudStorage`<sup>Required</sup> <a name="googleCloudStorage" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorage"></a>

```typescript
public readonly googleCloudStorage: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference</a>

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configsInput"></a>

```typescript
public readonly configsInput: string[];
```

- *Type:* string[]

---

##### `gitInput`<sup>Optional</sup> <a name="gitInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.gitInput"></a>

```typescript
public readonly gitInput: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---

##### `googleCloudBuildRepoInput`<sup>Optional</sup> <a name="googleCloudBuildRepoInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepoInput"></a>

```typescript
public readonly googleCloudBuildRepoInput: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---

##### `googleCloudStorageInput`<sup>Optional</sup> <a name="googleCloudStorageInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorageInput"></a>

```typescript
public readonly googleCloudStorageInput: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configs"></a>

```typescript
public readonly configs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>

---


### ClouddeployCustomTargetTypeCustomActionsOutputReference <a name="ClouddeployCustomTargetTypeCustomActionsOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules">putIncludeSkaffoldModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resetIncludeSkaffoldModules">resetIncludeSkaffoldModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resetRenderAction">resetRenderAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludeSkaffoldModules` <a name="putIncludeSkaffoldModules" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules"></a>

```typescript
public putIncludeSkaffoldModules(value: IResolvable | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]

---

##### `resetIncludeSkaffoldModules` <a name="resetIncludeSkaffoldModules" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resetIncludeSkaffoldModules"></a>

```typescript
public resetIncludeSkaffoldModules(): void
```

##### `resetRenderAction` <a name="resetRenderAction" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.resetRenderAction"></a>

```typescript
public resetRenderAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModules">includeSkaffoldModules</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployActionInput">deployActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModulesInput">includeSkaffoldModulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderActionInput">renderActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployAction">deployAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderAction">renderAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeSkaffoldModules`<sup>Required</sup> <a name="includeSkaffoldModules" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModules"></a>

```typescript
public readonly includeSkaffoldModules: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList</a>

---

##### `deployActionInput`<sup>Optional</sup> <a name="deployActionInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployActionInput"></a>

```typescript
public readonly deployActionInput: string;
```

- *Type:* string

---

##### `includeSkaffoldModulesInput`<sup>Optional</sup> <a name="includeSkaffoldModulesInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModulesInput"></a>

```typescript
public readonly includeSkaffoldModulesInput: IResolvable | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]

---

##### `renderActionInput`<sup>Optional</sup> <a name="renderActionInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderActionInput"></a>

```typescript
public readonly renderActionInput: string;
```

- *Type:* string

---

##### `deployAction`<sup>Required</sup> <a name="deployAction" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployAction"></a>

```typescript
public readonly deployAction: string;
```

- *Type:* string

---

##### `renderAction`<sup>Required</sup> <a name="renderAction" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderAction"></a>

```typescript
public readonly renderAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeCustomActions;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeCustomActions">ClouddeployCustomTargetTypeCustomActions</a>

---


### ClouddeployCustomTargetTypeTasksDeployContainerOutputReference <a name="ClouddeployCustomTargetTypeTasksDeployContainerOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.envInput">envInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.envInput"></a>

```typescript
public readonly envInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeTasksDeployContainer;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a>

---


### ClouddeployCustomTargetTypeTasksDeployOutputReference <a name="ClouddeployCustomTargetTypeTasksDeployOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.resetContainer">resetContainer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainer` <a name="putContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer"></a>

```typescript
public putContainer(value: ClouddeployCustomTargetTypeTasksDeployContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a>

---

##### `resetContainer` <a name="resetContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference">ClouddeployCustomTargetTypeTasksDeployContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.containerInput">containerInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.container"></a>

```typescript
public readonly container: ClouddeployCustomTargetTypeTasksDeployContainerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainerOutputReference">ClouddeployCustomTargetTypeTasksDeployContainerOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: ClouddeployCustomTargetTypeTasksDeployContainer;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployContainer">ClouddeployCustomTargetTypeTasksDeployContainer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeTasksDeploy;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a>

---


### ClouddeployCustomTargetTypeTasksOutputReference <a name="ClouddeployCustomTargetTypeTasksOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putDeploy">putDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putRender">putRender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.resetRender">resetRender</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeploy` <a name="putDeploy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putDeploy"></a>

```typescript
public putDeploy(value: ClouddeployCustomTargetTypeTasksDeploy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putDeploy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a>

---

##### `putRender` <a name="putRender" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putRender"></a>

```typescript
public putRender(value: ClouddeployCustomTargetTypeTasksRender): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.putRender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a>

---

##### `resetRender` <a name="resetRender" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.resetRender"></a>

```typescript
public resetRender(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.deploy">deploy</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference">ClouddeployCustomTargetTypeTasksDeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.render">render</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference">ClouddeployCustomTargetTypeTasksRenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.deployInput">deployInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.renderInput">renderInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploy`<sup>Required</sup> <a name="deploy" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.deploy"></a>

```typescript
public readonly deploy: ClouddeployCustomTargetTypeTasksDeployOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeployOutputReference">ClouddeployCustomTargetTypeTasksDeployOutputReference</a>

---

##### `render`<sup>Required</sup> <a name="render" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.render"></a>

```typescript
public readonly render: ClouddeployCustomTargetTypeTasksRenderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference">ClouddeployCustomTargetTypeTasksRenderOutputReference</a>

---

##### `deployInput`<sup>Optional</sup> <a name="deployInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.deployInput"></a>

```typescript
public readonly deployInput: ClouddeployCustomTargetTypeTasksDeploy;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksDeploy">ClouddeployCustomTargetTypeTasksDeploy</a>

---

##### `renderInput`<sup>Optional</sup> <a name="renderInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.renderInput"></a>

```typescript
public readonly renderInput: ClouddeployCustomTargetTypeTasksRender;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeTasks;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasks">ClouddeployCustomTargetTypeTasks</a>

---


### ClouddeployCustomTargetTypeTasksRenderContainerOutputReference <a name="ClouddeployCustomTargetTypeTasksRenderContainerOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.envInput">envInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.envInput"></a>

```typescript
public readonly envInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeTasksRenderContainer;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a>

---


### ClouddeployCustomTargetTypeTasksRenderOutputReference <a name="ClouddeployCustomTargetTypeTasksRenderOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.resetContainer">resetContainer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainer` <a name="putContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer"></a>

```typescript
public putContainer(value: ClouddeployCustomTargetTypeTasksRenderContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a>

---

##### `resetContainer` <a name="resetContainer" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference">ClouddeployCustomTargetTypeTasksRenderContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.containerInput">containerInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.container"></a>

```typescript
public readonly container: ClouddeployCustomTargetTypeTasksRenderContainerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainerOutputReference">ClouddeployCustomTargetTypeTasksRenderContainerOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: ClouddeployCustomTargetTypeTasksRenderContainer;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderContainer">ClouddeployCustomTargetTypeTasksRenderContainer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRenderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeTasksRender;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTasksRender">ClouddeployCustomTargetTypeTasksRender</a>

---


### ClouddeployCustomTargetTypeTimeoutsOutputReference <a name="ClouddeployCustomTargetTypeTimeoutsOutputReference" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetType } from '@cdktn/provider-google'

new clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployCustomTargetTypeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployCustomTargetType.ClouddeployCustomTargetTypeTimeouts">ClouddeployCustomTargetTypeTimeouts</a>

---



