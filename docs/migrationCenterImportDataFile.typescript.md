# `migrationCenterImportDataFile` Submodule <a name="`migrationCenterImportDataFile` Submodule" id="@cdktn/provider-google.migrationCenterImportDataFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterImportDataFile <a name="MigrationCenterImportDataFile" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file google_migration_center_import_data_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

new migrationCenterImportDataFile.MigrationCenterImportDataFile(scope: Construct, id: string, config: MigrationCenterImportDataFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig">MigrationCenterImportDataFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig">MigrationCenterImportDataFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.putTimeouts"></a>

```typescript
public putTimeouts(value: MigrationCenterImportDataFileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterImportDataFile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isConstruct"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

migrationCenterImportDataFile.MigrationCenterImportDataFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformElement"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformResource"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MigrationCenterImportDataFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MigrationCenterImportDataFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MigrationCenterImportDataFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterImportDataFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference">MigrationCenterImportDataFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.uploadFileInfo">uploadFileInfo</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList">MigrationCenterImportDataFileUploadFileInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileIdInput">importDataFileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJobInput">importJobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileId">importDataFileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJob">importJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeouts"></a>

```typescript
public readonly timeouts: MigrationCenterImportDataFileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference">MigrationCenterImportDataFileTimeoutsOutputReference</a>

---

##### `uploadFileInfo`<sup>Required</sup> <a name="uploadFileInfo" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.uploadFileInfo"></a>

```typescript
public readonly uploadFileInfo: MigrationCenterImportDataFileUploadFileInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList">MigrationCenterImportDataFileUploadFileInfoList</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importDataFileIdInput`<sup>Optional</sup> <a name="importDataFileIdInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileIdInput"></a>

```typescript
public readonly importDataFileIdInput: string;
```

- *Type:* string

---

##### `importJobInput`<sup>Optional</sup> <a name="importJobInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJobInput"></a>

```typescript
public readonly importJobInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MigrationCenterImportDataFileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importDataFileId`<sup>Required</sup> <a name="importDataFileId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileId"></a>

```typescript
public readonly importDataFileId: string;
```

- *Type:* string

---

##### `importJob`<sup>Required</sup> <a name="importJob" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJob"></a>

```typescript
public readonly importJob: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterImportDataFileConfig <a name="MigrationCenterImportDataFileConfig" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.Initializer"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

const migrationCenterImportDataFileConfig: migrationCenterImportDataFile.MigrationCenterImportDataFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.format">format</a></code> | <code>string</code> | Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importDataFileId">importDataFileId</a></code> | <code>string</code> | The ID of the new data file. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importJob">importJob</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.displayName">displayName</a></code> | <code>string</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#id MigrationCenterImportDataFile#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#project MigrationCenterImportDataFile#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#format MigrationCenterImportDataFile#format}

---

##### `importDataFileId`<sup>Required</sup> <a name="importDataFileId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importDataFileId"></a>

```typescript
public readonly importDataFileId: string;
```

- *Type:* string

The ID of the new data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#import_data_file_id MigrationCenterImportDataFile#import_data_file_id}

---

##### `importJob`<sup>Required</sup> <a name="importJob" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importJob"></a>

```typescript
public readonly importJob: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#import_job MigrationCenterImportDataFile#import_job}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#location MigrationCenterImportDataFile#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#deletion_policy MigrationCenterImportDataFile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#display_name MigrationCenterImportDataFile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#id MigrationCenterImportDataFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#project MigrationCenterImportDataFile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MigrationCenterImportDataFileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#timeouts MigrationCenterImportDataFile#timeouts}

---

### MigrationCenterImportDataFileTimeouts <a name="MigrationCenterImportDataFileTimeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.Initializer"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

const migrationCenterImportDataFileTimeouts: migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#create MigrationCenterImportDataFile#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#delete MigrationCenterImportDataFile#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#create MigrationCenterImportDataFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#delete MigrationCenterImportDataFile#delete}.

---

### MigrationCenterImportDataFileUploadFileInfo <a name="MigrationCenterImportDataFileUploadFileInfo" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo.Initializer"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

const migrationCenterImportDataFileUploadFileInfo: migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterImportDataFileTimeoutsOutputReference <a name="MigrationCenterImportDataFileTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

new migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MigrationCenterImportDataFileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

---


### MigrationCenterImportDataFileUploadFileInfoList <a name="MigrationCenterImportDataFileUploadFileInfoList" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

new migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.get"></a>

```typescript
public get(index: number): MigrationCenterImportDataFileUploadFileInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterImportDataFileUploadFileInfoOutputReference <a name="MigrationCenterImportDataFileUploadFileInfoOutputReference" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer"></a>

```typescript
import { migrationCenterImportDataFile } from '@cdktn/provider-google'

new migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.headers">headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.signedUri">signedUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.uriExpirationTime">uriExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo">MigrationCenterImportDataFileUploadFileInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.headers"></a>

```typescript
public readonly headers: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `signedUri`<sup>Required</sup> <a name="signedUri" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.signedUri"></a>

```typescript
public readonly signedUri: string;
```

- *Type:* string

---

##### `uriExpirationTime`<sup>Required</sup> <a name="uriExpirationTime" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.uriExpirationTime"></a>

```typescript
public readonly uriExpirationTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterImportDataFileUploadFileInfo;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo">MigrationCenterImportDataFileUploadFileInfo</a>

---



