# `dataGoogleBackupDrBackupPlanAssociations` Submodule <a name="`dataGoogleBackupDrBackupPlanAssociations` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrBackupPlanAssociations <a name="DataGoogleBackupDrBackupPlanAssociations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/backup_dr_backup_plan_associations google_backup_dr_backup_plan_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations(scope: Construct, id: string, config: DataGoogleBackupDrBackupPlanAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig">DataGoogleBackupDrBackupPlanAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig">DataGoogleBackupDrBackupPlanAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrBackupPlanAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleBackupDrBackupPlanAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBackupDrBackupPlanAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBackupDrBackupPlanAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/backup_dr_backup_plan_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrBackupPlanAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.associations">associations</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList">DataGoogleBackupDrBackupPlanAssociationsAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.associations"></a>

```typescript
public readonly associations: DataGoogleBackupDrBackupPlanAssociationsAssociationsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList">DataGoogleBackupDrBackupPlanAssociationsAssociationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrBackupPlanAssociationsAssociations <a name="DataGoogleBackupDrBackupPlanAssociationsAssociations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanAssociationsAssociations: dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations = { ... }
```


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo: dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo = { ... }
```


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError: dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError = { ... }
```


### DataGoogleBackupDrBackupPlanAssociationsConfig <a name="DataGoogleBackupDrBackupPlanAssociationsConfig" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanAssociationsConfig: dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.location">location</a></code> | <code>string</code> | The location to list the backup plan associations from. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.resourceType">resourceType</a></code> | <code>string</code> | The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location to list the backup plan associations from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/backup_dr_backup_plan_associations#location DataGoogleBackupDrBackupPlanAssociations#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/backup_dr_backup_plan_associations#project DataGoogleBackupDrBackupPlanAssociations#project}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/backup_dr_backup_plan_associations#resource_type DataGoogleBackupDrBackupPlanAssociations#resource_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrBackupPlanAssociationsAssociationsList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.backupPlan">backupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.rulesConfigInfo">rulesConfigInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations">DataGoogleBackupDrBackupPlanAssociationsAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.backupPlan"></a>

```typescript
public readonly backupPlan: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `rulesConfigInfo`<sup>Required</sup> <a name="rulesConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.rulesConfigInfo"></a>

```typescript
public readonly rulesConfigInfo: DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanAssociationsAssociations;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations">DataGoogleBackupDrBackupPlanAssociationsAssociations</a>

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError</a>

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociations } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupError">lastBackupError</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupState">lastBackupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">lastSuccessfulBackupConsistencyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastBackupError`<sup>Required</sup> <a name="lastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupError"></a>

```typescript
public readonly lastBackupError: DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList</a>

---

##### `lastBackupState`<sup>Required</sup> <a name="lastBackupState" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupState"></a>

```typescript
public readonly lastBackupState: string;
```

- *Type:* string

---

##### `lastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="lastSuccessfulBackupConsistencyTime" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```typescript
public readonly lastSuccessfulBackupConsistencyTime: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo</a>

---



