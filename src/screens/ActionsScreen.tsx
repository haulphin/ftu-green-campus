// src/screens/ActionsScreen.tsx
import { useState } from "react";
import { classesMock, todosMock } from "../data";

interface CustomTodo {
    id: string;
    title: string;
    icon: string;
    kind: "study" | "green";
    relatedTo: string;
}

export function ActionsScreen() {
    const todayClasses = classesMock;
    const [completedTodos, setCompletedTodos] = useState<Record<string, boolean>>({});
    const [customTodos, setCustomTodos] = useState<CustomTodo[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState("");

    const toggleTodo = (todoId: string) => {
        setCompletedTodos(prev => ({
            ...prev,
            [todoId]: !prev[todoId]
        }));
    };

    const handleAddTodo = () => {
        if (!newTodoTitle.trim()) return;

        const newTodo: CustomTodo = {
            id: `custom-${Date.now()}`,
            title: newTodoTitle,
            icon: "📝",
            kind: "study",
            relatedTo: todayClasses[0].id // Add to first class by default
        };

        setCustomTodos(prev => [...prev, newTodo]);
        setNewTodoTitle("");
        setShowAddModal(false);
    };

    // Combine original todos with custom todos
    const getAllTodos = (classId: string) => {
        const original = todosMock.filter((t) => t.relatedTo === classId);
        const custom = customTodos.filter((t) => t.relatedTo === classId);
        return [...original, ...custom];
    };

    return (
        <div style={{ padding: '12px', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ marginBottom: '16px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '800', margin: 0, color: '#333' }}>Todo theo môn</h2>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>Việc học + việc xanh (Locket FTU)</div>
            </div>

            {/* Quick Add Card */}
            <div style={{ background: 'white', borderRadius: '10px', padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '13px', color: '#333', marginBottom: '2px' }}>Quick add</div>
                        <div style={{ fontSize: '11px', color: '#666' }}>Tự thêm việc</div>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        style={{
                            padding: '8px 14px',
                            background: '#fe2c55',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        ＋ Thêm
                    </button>
                </div>
                <div style={{ background: '#fff7e6', border: '1px solid #ffe0b2', borderRadius: '6px', padding: '8px', fontSize: '11px', color: '#d35400' }}>
                    VD: "Mang bình nước", "Note bài chương 3"
                </div>
            </div>

            {/* Add Todo Modal */}
            {showAddModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '24px',
                        width: '90%',
                        maxWidth: '500px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                    }}>
                        <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 16px 0', color: '#333' }}>Thêm Todo mới</h3>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>
                                Nội dung việc cần làm
                            </label>
                            <input
                                type="text"
                                value={newTodoTitle}
                                onChange={(e) => setNewTodoTitle(e.target.value)}
                                placeholder="VD: Mang bình nước, Note bài chương 3..."
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #e9ecef',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') handleAddTodo();
                                }}
                                autoFocus
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                            <button
                                onClick={() => {
                                    setShowAddModal(false);
                                    setNewTodoTitle("");
                                }}
                                style={{
                                    padding: '10px 20px',
                                    background: '#f1f1f2',
                                    color: '#161823',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                }}
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleAddTodo}
                                disabled={!newTodoTitle.trim()}
                                style={{
                                    padding: '10px 20px',
                                    background: newTodoTitle.trim() ? '#fe2c55' : '#ddd',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontWeight: '700',
                                    cursor: newTodoTitle.trim() ? 'pointer' : 'not-allowed',
                                    fontSize: '14px'
                                }}
                            >
                                Thêm Todo
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Todo List by Class */}
            <div>
                <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '12px', color: '#333' }}>Danh sách Todo</h3>

                {todayClasses.map((cl) => {
                    const list = getAllTodos(cl.id);
                    if (list.length === 0) return null;

                    const completedCount = list.filter(t => completedTodos[t.id]).length;
                    const totalCount = list.length;

                    return (
                        <div key={cl.id} style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: '12px', overflow: 'hidden' }}>
                            {/* Class Header */}
                            <div style={{ background: '#f8f9fa', padding: '10px 12px', borderBottom: '1px solid #e9ecef' }}>
                                <div style={{ marginBottom: '6px' }}>
                                    <div style={{ fontWeight: '700', fontSize: '13px', color: '#333' }}>{cl.title}</div>
                                    <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>
                                        {cl.start} – {cl.end} • {cl.room}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    <span style={{ background: '#e6fffa', color: '#00b894', padding: '4px 8px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>
                                        {completedCount}/{totalCount} hoàn thành
                                    </span>
                                    <span style={{ background: '#fff7e6', color: '#d35400', padding: '4px 8px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>
                                        Nhắc trước giờ học
                                    </span>
                                </div>
                            </div>

                            {/* Todo Items */}
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead style={{ background: '#fafafa', borderBottom: '1px solid #e9ecef' }}>
                                    <tr style={{ textAlign: 'left', color: '#6c757d', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                                        <th style={{ padding: '8px 10px', width: '30px' }}>✓</th>
                                        <th style={{ padding: '8px 10px' }}>Việc cần làm</th>
                                        <th style={{ padding: '8px 10px', width: '60px' }}>Loại</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map((t) => {
                                        const isCompleted = completedTodos[t.id];
                                        return (
                                            <tr key={t.id} style={{
                                                borderBottom: '1px solid #f1f3f5',
                                                opacity: isCompleted ? 0.6 : 1,
                                                transition: 'opacity 0.2s'
                                            }}>
                                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                                    <button
                                                        onClick={() => toggleTodo(t.id)}
                                                        style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            borderRadius: '5px',
                                                            border: isCompleted ? 'none' : '2px solid #ddd',
                                                            background: isCompleted ? '#00b894' : 'white',
                                                            color: 'white',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '12px',
                                                            fontWeight: 'bold'
                                                        }}
                                                    >
                                                        {isCompleted && '✓'}
                                                    </button>
                                                </td>
                                                <td style={{ padding: '10px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                                        <span style={{ fontSize: '18px', flexShrink: 0 }}>{t.icon}</span>
                                                        <div style={{ flex: 1, minWidth: 0 }}>
                                                            <div style={{
                                                                fontWeight: '600',
                                                                fontSize: '12px',
                                                                color: '#2c3e50',
                                                                textDecoration: isCompleted ? 'line-through' : 'none',
                                                                wordBreak: 'break-word'
                                                            }}>
                                                                {t.title}
                                                            </div>
                                                            {'desc' in t && t.desc && <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{t.desc}</div>}
                                                            {'rule' in t && t.rule && <div style={{ fontSize: '10px', color: '#999', marginTop: '2px' }}>⏱ {t.rule}</div>}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '10px' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
                                                        {t.kind === 'green' ? (
                                                            <span style={{ background: '#e6fffa', color: '#00b894', padding: '4px 6px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                                                🌿 {('points' in t && t.points) ? `+${t.points}` : 'Green'}
                                                            </span>
                                                        ) : (
                                                            <span style={{ background: '#f1f2f6', color: '#747d8c', padding: '4px 6px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                                                📚 Học
                                                            </span>
                                                        )}
                                                        {t.kind === 'green' && !isCompleted && (
                                                            <button style={{
                                                                padding: '4px 8px',
                                                                background: '#fe2c55',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                cursor: 'pointer',
                                                                fontWeight: '600',
                                                                fontSize: '10px',
                                                                whiteSpace: 'nowrap'
                                                            }}>
                                                                📸
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
