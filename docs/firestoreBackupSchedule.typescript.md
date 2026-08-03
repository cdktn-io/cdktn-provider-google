# `firestoreBackupSchedule` Submodule <a name="`firestoreBackupSchedule` Submodule" id="@cdktn/provider-google.firestoreBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreBackupSchedule <a name="FirestoreBackupSchedule" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule google_firestore_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

new firestoreBackupSchedule.FirestoreBackupSchedule(scope: Construct, id: string, config: FirestoreBackupScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig">FirestoreBackupScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig">FirestoreBackupScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putDailyRecurrence">putDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putWeeklyRecurrence">putWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDailyRecurrence">resetDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetWeeklyRecurrence">resetWeeklyRecurrence</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDailyRecurrence` <a name="putDailyRecurrence" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putDailyRecurrence"></a>

```typescript
public putDailyRecurrence(value: FirestoreBackupScheduleDailyRecurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putDailyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: FirestoreBackupScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>

---

##### `putWeeklyRecurrence` <a name="putWeeklyRecurrence" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putWeeklyRecurrence"></a>

```typescript
public putWeeklyRecurrence(value: FirestoreBackupScheduleWeeklyRecurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putWeeklyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

---

##### `resetDailyRecurrence` <a name="resetDailyRecurrence" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDailyRecurrence"></a>

```typescript
public resetDailyRecurrence(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeeklyRecurrence` <a name="resetWeeklyRecurrence" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetWeeklyRecurrence"></a>

```typescript
public resetWeeklyRecurrence(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FirestoreBackupSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isConstruct"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

firestoreBackupSchedule.FirestoreBackupSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformElement"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformResource"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FirestoreBackupSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirestoreBackupSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirestoreBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FirestoreBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrence">dailyRecurrence</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference">FirestoreBackupScheduleDailyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference">FirestoreBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrence">weeklyRecurrence</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference">FirestoreBackupScheduleWeeklyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrenceInput">dailyRecurrenceInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retentionInput">retentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrenceInput">weeklyRecurrenceInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retention">retention</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dailyRecurrence`<sup>Required</sup> <a name="dailyRecurrence" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrence"></a>

```typescript
public readonly dailyRecurrence: FirestoreBackupScheduleDailyRecurrenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference">FirestoreBackupScheduleDailyRecurrenceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: FirestoreBackupScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference">FirestoreBackupScheduleTimeoutsOutputReference</a>

---

##### `weeklyRecurrence`<sup>Required</sup> <a name="weeklyRecurrence" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrence"></a>

```typescript
public readonly weeklyRecurrence: FirestoreBackupScheduleWeeklyRecurrenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference">FirestoreBackupScheduleWeeklyRecurrenceOutputReference</a>

---

##### `dailyRecurrenceInput`<sup>Optional</sup> <a name="dailyRecurrenceInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrenceInput"></a>

```typescript
public readonly dailyRecurrenceInput: FirestoreBackupScheduleDailyRecurrence;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retentionInput"></a>

```typescript
public readonly retentionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirestoreBackupScheduleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>

---

##### `weeklyRecurrenceInput`<sup>Optional</sup> <a name="weeklyRecurrenceInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrenceInput"></a>

```typescript
public readonly weeklyRecurrenceInput: FirestoreBackupScheduleWeeklyRecurrence;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retention"></a>

```typescript
public readonly retention: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreBackupScheduleConfig <a name="FirestoreBackupScheduleConfig" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.Initializer"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

const firestoreBackupScheduleConfig: firestoreBackupSchedule.FirestoreBackupScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.retention">retention</a></code> | <code>string</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dailyRecurrence">dailyRecurrence</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.database">database</a></code> | <code>string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#id FirestoreBackupSchedule#id}. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#project FirestoreBackupSchedule#project}. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.weeklyRecurrence">weeklyRecurrence</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.retention"></a>

```typescript
public readonly retention: string;
```

- *Type:* string

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

You can set this to a value up to 14 weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#retention FirestoreBackupSchedule#retention}

---

##### `dailyRecurrence`<sup>Optional</sup> <a name="dailyRecurrence" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dailyRecurrence"></a>

```typescript
public readonly dailyRecurrence: FirestoreBackupScheduleDailyRecurrence;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#daily_recurrence FirestoreBackupSchedule#daily_recurrence}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#database FirestoreBackupSchedule#database}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#deletion_policy FirestoreBackupSchedule#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#id FirestoreBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#project FirestoreBackupSchedule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirestoreBackupScheduleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#timeouts FirestoreBackupSchedule#timeouts}

---

##### `weeklyRecurrence`<sup>Optional</sup> <a name="weeklyRecurrence" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.weeklyRecurrence"></a>

```typescript
public readonly weeklyRecurrence: FirestoreBackupScheduleWeeklyRecurrence;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#weekly_recurrence FirestoreBackupSchedule#weekly_recurrence}

---

### FirestoreBackupScheduleDailyRecurrence <a name="FirestoreBackupScheduleDailyRecurrence" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence.Initializer"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

const firestoreBackupScheduleDailyRecurrence: firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence = { ... }
```


### FirestoreBackupScheduleTimeouts <a name="FirestoreBackupScheduleTimeouts" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.Initializer"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

const firestoreBackupScheduleTimeouts: firestoreBackupSchedule.FirestoreBackupScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#create FirestoreBackupSchedule#create}. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#delete FirestoreBackupSchedule#delete}. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#update FirestoreBackupSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#create FirestoreBackupSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#delete FirestoreBackupSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#update FirestoreBackupSchedule#update}.

---

### FirestoreBackupScheduleWeeklyRecurrence <a name="FirestoreBackupScheduleWeeklyRecurrence" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence.Initializer"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

const firestoreBackupScheduleWeeklyRecurrence: firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence.property.day">day</a></code> | <code>string</code> | The day of week to run. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

The day of week to run. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/firestore_backup_schedule#day FirestoreBackupSchedule#day}

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreBackupScheduleDailyRecurrenceOutputReference <a name="FirestoreBackupScheduleDailyRecurrenceOutputReference" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

new firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirestoreBackupScheduleDailyRecurrence;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

---


### FirestoreBackupScheduleTimeoutsOutputReference <a name="FirestoreBackupScheduleTimeoutsOutputReference" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

new firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirestoreBackupScheduleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>

---


### FirestoreBackupScheduleWeeklyRecurrenceOutputReference <a name="FirestoreBackupScheduleWeeklyRecurrenceOutputReference" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer"></a>

```typescript
import { firestoreBackupSchedule } from '@cdktn/provider-google'

new firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resetDay">resetDay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirestoreBackupScheduleWeeklyRecurrence;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

---



