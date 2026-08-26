# `sqlProvisionScript` Submodule <a name="`sqlProvisionScript` Submodule" id="@cdktn/provider-google.sqlProvisionScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlProvisionScript <a name="SqlProvisionScript" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script google_sql_provision_script}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer"></a>

```typescript
import { sqlProvisionScript } from '@cdktn/provider-google'

new sqlProvisionScript.SqlProvisionScript(scope: Construct, id: string, config: SqlProvisionScriptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig">SqlProvisionScriptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig">SqlProvisionScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetPasswordSecretVersion">resetPasswordSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPasswordSecretVersion` <a name="resetPasswordSecretVersion" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetPasswordSecretVersion"></a>

```typescript
public resetPasswordSecretVersion(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SqlProvisionScript resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isConstruct"></a>

```typescript
import { sqlProvisionScript } from '@cdktn/provider-google'

sqlProvisionScript.SqlProvisionScript.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformElement"></a>

```typescript
import { sqlProvisionScript } from '@cdktn/provider-google'

sqlProvisionScript.SqlProvisionScript.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformResource"></a>

```typescript
import { sqlProvisionScript } from '@cdktn/provider-google'

sqlProvisionScript.SqlProvisionScript.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport"></a>

```typescript
import { sqlProvisionScript } from '@cdktn/provider-google'

sqlProvisionScript.SqlProvisionScript.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SqlProvisionScript resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlProvisionScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlProvisionScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SqlProvisionScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.passwordSecretVersionInput">passwordSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.passwordSecretVersion">passwordSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `passwordSecretVersionInput`<sup>Optional</sup> <a name="passwordSecretVersionInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.passwordSecretVersionInput"></a>

```typescript
public readonly passwordSecretVersionInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `passwordSecretVersion`<sup>Required</sup> <a name="passwordSecretVersion" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.passwordSecretVersion"></a>

```typescript
public readonly passwordSecretVersion: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlProvisionScriptConfig <a name="SqlProvisionScriptConfig" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.Initializer"></a>

```typescript
import { sqlProvisionScript } from '@cdktn/provider-google'

const sqlProvisionScriptConfig: sqlProvisionScript.SqlProvisionScriptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.instance">instance</a></code> | <code>string</code> | The name of the Cloud SQL instance. Changing this forces the script to be run on the new instance. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.script">script</a></code> | <code>string</code> | The SQL script to provision database resources. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.database">database</a></code> | <code>string</code> | The name of the database to which Terraform connects. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | The deletion policy for the resources created by the script. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.description">description</a></code> | <code>string</code> | The description of the provision script. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#id SqlProvisionScript#id}. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.passwordSecretVersion">passwordSecretVersion</a></code> | <code>string</code> | The resource name of the Secret Manager secret storing the password. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.user">user</a></code> | <code>string</code> | The name of the built-in database user to authenticate as. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The name of the Cloud SQL instance. Changing this forces the script to be run on the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#instance SqlProvisionScript#instance}

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

The SQL script to provision database resources.

Its execution time limit is 30 s.
				Changing this forces the script to be rerun. Make sure the script is idempotent.
				You can use statements like "create if not exists …" or
				"if not exists (select …) then … end if" to prevent existence-related errors. If it's not
				possible to make a statement idempotent, you can run it once and then remove it from this script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#script SqlProvisionScript#script}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The name of the database to which Terraform connects.

Changing
				this forces Terraform to connect to the new database and run the script. This argument is
				required for Postgres instances. It's optional for MySQL, but some of your queries may require
				a database. You can create and use a database in the script or explicitly reference a
				google_sql_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#database SqlProvisionScript#database}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

The deletion policy for the resources created by the script.

The default is "ABANDON".
				It must be "ABANDON" to allow Terraform to abandon the resources. If you want to delete resources, add statements
				in the script such as "drop … if exists".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#deletion_policy SqlProvisionScript#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the provision script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#description SqlProvisionScript#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#id SqlProvisionScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordSecretVersion`<sup>Optional</sup> <a name="passwordSecretVersion" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.passwordSecretVersion"></a>

```typescript
public readonly passwordSecretVersion: string;
```

- *Type:* string

The resource name of the Secret Manager secret storing the password.

The secret
				should be a regional secret and stored in the exact same region as the Cloud SQL instance.
				Follow https://docs.cloud.google.com/secret-manager/regional-secrets/create-regional-secret.
				When user and password_secret_version are provided, the script is run using this user.
				Otherwise, the script is run using the identity account used to apply your Terraform config.
				Changing this field forces the script to be run again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#password_secret_version SqlProvisionScript#password_secret_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#project SqlProvisionScript#project}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

The name of the built-in database user to authenticate as.

For MySQL user,
				omit '@' and the hostname. The user should exist as a built-in user in the database.
				When user and password_secret_version are provided, the script is run using this user. Otherwise,
				the script is run using the identity account used to apply your Terraform config.
				Changing this forces the script to be run using the new user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/sql_provision_script#user SqlProvisionScript#user}

---



