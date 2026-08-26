# `firestoreChangeStream` Submodule <a name="`firestoreChangeStream` Submodule" id="@cdktn/provider-google.firestoreChangeStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreChangeStream <a name="FirestoreChangeStream" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream google_firestore_change_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

new firestoreChangeStream.FirestoreChangeStream(scope: Construct, id: string, config: FirestoreChangeStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig">FirestoreChangeStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig">FirestoreChangeStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putCollectionGroupScope">putCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putDatabaseScope">putDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetCollectionGroupScope">resetCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabaseScope">resetDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCollectionGroupScope` <a name="putCollectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putCollectionGroupScope"></a>

```typescript
public putCollectionGroupScope(value: FirestoreChangeStreamCollectionGroupScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putCollectionGroupScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

---

##### `putDatabaseScope` <a name="putDatabaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putDatabaseScope"></a>

```typescript
public putDatabaseScope(value: FirestoreChangeStreamDatabaseScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putDatabaseScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts"></a>

```typescript
public putTimeouts(value: FirestoreChangeStreamTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a>

---

##### `resetCollectionGroupScope` <a name="resetCollectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetCollectionGroupScope"></a>

```typescript
public resetCollectionGroupScope(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDatabaseScope` <a name="resetDatabaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabaseScope"></a>

```typescript
public resetDatabaseScope(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FirestoreChangeStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isConstruct"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

firestoreChangeStream.FirestoreChangeStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformElement"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

firestoreChangeStream.FirestoreChangeStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformResource"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

firestoreChangeStream.FirestoreChangeStream.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

firestoreChangeStream.FirestoreChangeStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FirestoreChangeStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirestoreChangeStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirestoreChangeStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FirestoreChangeStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScope">collectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference">FirestoreChangeStreamCollectionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScope">databaseScope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference">FirestoreChangeStreamDatabaseScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference">FirestoreChangeStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScopeInput">collectionGroupScopeInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScopeInput">databaseScopeInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriod">retentionPeriod</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectionGroupScope`<sup>Required</sup> <a name="collectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScope"></a>

```typescript
public readonly collectionGroupScope: FirestoreChangeStreamCollectionGroupScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference">FirestoreChangeStreamCollectionGroupScopeOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `databaseScope`<sup>Required</sup> <a name="databaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScope"></a>

```typescript
public readonly databaseScope: FirestoreChangeStreamDatabaseScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference">FirestoreChangeStreamDatabaseScopeOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeouts"></a>

```typescript
public readonly timeouts: FirestoreChangeStreamTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference">FirestoreChangeStreamTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `collectionGroupScopeInput`<sup>Optional</sup> <a name="collectionGroupScopeInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScopeInput"></a>

```typescript
public readonly collectionGroupScopeInput: FirestoreChangeStreamCollectionGroupScope;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `databaseScopeInput`<sup>Optional</sup> <a name="databaseScopeInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScopeInput"></a>

```typescript
public readonly databaseScopeInput: FirestoreChangeStreamDatabaseScope;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirestoreChangeStreamTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreChangeStreamCollectionGroupScope <a name="FirestoreChangeStreamCollectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope.Initializer"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

const firestoreChangeStreamCollectionGroupScope: firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope.property.collectionGroupId">collectionGroupId</a></code> | <code>string</code> | The ID of the collection group to track. |

---

##### `collectionGroupId`<sup>Required</sup> <a name="collectionGroupId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope.property.collectionGroupId"></a>

```typescript
public readonly collectionGroupId: string;
```

- *Type:* string

The ID of the collection group to track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#collection_group_id FirestoreChangeStream#collection_group_id}

---

### FirestoreChangeStreamConfig <a name="FirestoreChangeStreamConfig" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.Initializer"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

const firestoreChangeStreamConfig: firestoreChangeStream.FirestoreChangeStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.name">name</a></code> | <code>string</code> | The ID to use for the change stream, which will become the final component of the change stream's resource name. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.retentionPeriod">retentionPeriod</a></code> | <code>string</code> | The duration for which change stream data is retained. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.collectionGroupScope">collectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a></code> | collection_group_scope block. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.database">database</a></code> | <code>string</code> | The Firestore database ID. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.databaseScope">databaseScope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a></code> | database_scope block. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#id FirestoreChangeStream#id}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#project FirestoreChangeStream#project}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID to use for the change stream, which will become the final component of the change stream's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#name FirestoreChangeStream#name}

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: string;
```

- *Type:* string

The duration for which change stream data is retained.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "86400s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#retention_period FirestoreChangeStream#retention_period}

---

##### `collectionGroupScope`<sup>Optional</sup> <a name="collectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.collectionGroupScope"></a>

```typescript
public readonly collectionGroupScope: FirestoreChangeStreamCollectionGroupScope;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

collection_group_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#collection_group_scope FirestoreChangeStream#collection_group_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The Firestore database ID. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#database FirestoreChangeStream#database}

---

##### `databaseScope`<sup>Optional</sup> <a name="databaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.databaseScope"></a>

```typescript
public readonly databaseScope: FirestoreChangeStreamDatabaseScope;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

database_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#database_scope FirestoreChangeStream#database_scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#deletion_policy FirestoreChangeStream#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#id FirestoreChangeStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#project FirestoreChangeStream#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirestoreChangeStreamTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#timeouts FirestoreChangeStream#timeouts}

---

### FirestoreChangeStreamDatabaseScope <a name="FirestoreChangeStreamDatabaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope.Initializer"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

const firestoreChangeStreamDatabaseScope: firestoreChangeStream.FirestoreChangeStreamDatabaseScope = { ... }
```


### FirestoreChangeStreamTimeouts <a name="FirestoreChangeStreamTimeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.Initializer"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

const firestoreChangeStreamTimeouts: firestoreChangeStream.FirestoreChangeStreamTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#create FirestoreChangeStream#create}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#delete FirestoreChangeStream#delete}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#update FirestoreChangeStream#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#create FirestoreChangeStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#delete FirestoreChangeStream#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#update FirestoreChangeStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreChangeStreamCollectionGroupScopeOutputReference <a name="FirestoreChangeStreamCollectionGroupScopeOutputReference" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

new firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput">collectionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId">collectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionGroupIdInput`<sup>Optional</sup> <a name="collectionGroupIdInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput"></a>

```typescript
public readonly collectionGroupIdInput: string;
```

- *Type:* string

---

##### `collectionGroupId`<sup>Required</sup> <a name="collectionGroupId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId"></a>

```typescript
public readonly collectionGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirestoreChangeStreamCollectionGroupScope;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

---


### FirestoreChangeStreamDatabaseScopeOutputReference <a name="FirestoreChangeStreamDatabaseScopeOutputReference" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

new firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirestoreChangeStreamDatabaseScope;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

---


### FirestoreChangeStreamTimeoutsOutputReference <a name="FirestoreChangeStreamTimeoutsOutputReference" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer"></a>

```typescript
import { firestoreChangeStream } from '@cdktn/provider-google'

new firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirestoreChangeStreamTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a>

---



